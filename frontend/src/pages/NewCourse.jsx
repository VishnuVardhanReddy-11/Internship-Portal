import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NewCourse = ({ onSave }) => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: '',
    startDate: '',
    endDate: '',
    level: '',
    content: [],
  });

  const navigate = useNavigate();
  const location = useLocation();
  const editCourse = location.state?.editCourse;

  useEffect(() => {
    if (editCourse) {
      setCourseData({ ...editCourse });
    }
  }, [editCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addContentBlock = () => {
    setCourseData((prevData) => ({
      ...prevData,
      content: [...prevData.content, { type: 'text', value: '', filename: '' }],
    }));
  };

  const updateContentBlock = (index, key, value) => {
    const updatedContent = [...courseData.content];
    updatedContent[index][key] = value;
    setCourseData((prevData) => ({
      ...prevData,
      content: updatedContent,
    }));
  };

  const removeContentBlock = (index) => {
    const updatedContent = [...courseData.content];
    updatedContent.splice(index, 1);
    setCourseData((prevData) => ({
      ...prevData,
      content: updatedContent,
    }));
  };

  const extractYouTubeID = (url) => {
    try {
      const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[1].length === 11 ? match[1] : null;
    } catch {
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Add basic fields
      formData.append('title', courseData.title);
      formData.append('description', courseData.description);
      formData.append('instructor', courseData.instructor);
      formData.append('duration', courseData.duration);
      formData.append('startDate', courseData.startDate);
      formData.append('endDate', courseData.endDate);
      formData.append('level', courseData.level);

      const contentArray = [];

      for (let i = 0; i < courseData.content.length; i++) {
        const block = courseData.content[i];
        if (block.type === 'video-upload' || block.type === 'audio-upload') {
          const input = document.getElementById(`${block.type}-${i}`);
          if (input && input.files[0]) {
            const fileKey = `${block.type}_${i}`;
            formData.append(fileKey, input.files[0]);
            contentArray.push({ type: block.type, value: fileKey });
          }
        } else {
          contentArray.push(block);
        }
      }

      formData.append('content', JSON.stringify(contentArray));

      const res = await fetch('http://localhost:3000/admin/create-course', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert(`✅ Course "${data.course.title}" created successfully!`);
        navigate('/admin/dashboard');
      } else {
        alert(`❌ ${data.message || 'Failed to create course'}`);
      }
    } catch (error) {
      alert(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4 md:p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto bg-gray-800 border border-gray-700/50 rounded-xl shadow-2xl p-6 md:p-10 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl font-bold text-white">
            {editCourse ? 'Edit Course' : 'Add New Course'}
            </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={courseData.title}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 rounded"
          />

          <textarea
            name="description"
            placeholder="Course Description"
            value={courseData.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full p-2 bg-gray-700 rounded"
          />

          <input
            type="text"
            name="instructor"
            placeholder="Instructor Name"
            value={courseData.instructor}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 rounded"
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g., 6 weeks)"
            value={courseData.duration}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 rounded"
          />

          <select
            name="level"
            value={courseData.level}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 rounded"
          >
            <option value="">Select Difficulty Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <div className="flex gap-4">
            <input
              type="date"
              name="startDate"
              value={courseData.startDate}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 rounded"
            />
            <input
              type="date"
              name="endDate"
              value={courseData.endDate}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>

          {/* Content Blocks */}
          <div className="space-y-4">
            {courseData.content.map((block, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded">
                <select
                  value={block.type}
                  onChange={(e) => updateContentBlock(index, 'type', e.target.value)}
                  className="w-full p-2 mb-2 bg-gray-800 rounded"
                >
                  <option value="text">Text</option>
                  <option value="video-upload">Video Upload</option>
                  <option value="video-link">YouTube/Video Link</option>
                  <option value="audio-upload">Audio Upload</option>
                </select>

                {block.type === 'text' && (
                  <textarea
                    placeholder="Enter text content"
                    value={block.value}
                    onChange={(e) => updateContentBlock(index, 'value', e.target.value)}
                    className="w-full p-2 bg-gray-800 rounded"
                    required
                  />
                )}

                {block.type === 'video-upload' && (
                  <>
                    <input
                      type="file"
                      id={`video-upload-${index}`}
                      accept="video/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const url = URL.createObjectURL(file);
                          updateContentBlock(index, 'value', url);
                          updateContentBlock(index, 'filename', file.name);
                        }
                      }}
                      className="block w-full text-white"
                      required
                    />
                    {block.value && (
                      <video controls src={block.value} className="w-full mt-2 rounded" />
                    )}
                  </>
                )}

                {block.type === 'audio-upload' && (
                  <>
                    <input
                      type="file"
                      id={`audio-upload-${index}`}
                      accept="audio/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const url = URL.createObjectURL(file);
                          updateContentBlock(index, 'value', url);
                          updateContentBlock(index, 'filename', file.name);
                        }
                      }}
                      className="block w-full text-white"
                      required
                    />
                    {block.value && (
                      <audio controls src={block.value} className="w-full mt-2" />
                    )}
                  </>
                )}

                {block.type === 'video-link' && (
                  <>
                    <input
                      type="url"
                      placeholder="Paste video URL"
                      value={block.value}
                      onChange={(e) => updateContentBlock(index, 'value', e.target.value)}
                      className="w-full p-2 bg-gray-800 rounded"
                      required
                    />
                    {block.value && (
                      extractYouTubeID(block.value) ? (
                        <iframe
                          className="w-full mt-2 rounded"
                          height="300"
                          src={`https://www.youtube.com/embed/${extractYouTubeID(block.value)}`}
                          frameBorder="0"
                          allowFullScreen
                        />
                      ) : (
                        <video controls src={block.value} className="w-full mt-2 rounded" />
                      )
                    )}
                  </>
                )}

                <button
                  type="button"
                  onClick={() => removeContentBlock(index)}
                  className="text-red-400 mt-2 underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addContentBlock}
              className="text-blue-400 underline"
            >
              + Add Content Block
            </button>
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/admin/dashboard')}
              className="px-6 py-2 rounded text-gray-300 border border-gray-600 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              {editCourse ? 'Save Changes' : 'Add Course'}
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};


export default NewCourse;
