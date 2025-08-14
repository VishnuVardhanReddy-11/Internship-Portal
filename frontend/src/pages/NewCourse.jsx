import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NewCourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: '',
    startDate: '',
    endDate: '',
    level: '',
    content: [],
    id: null
  });

  const navigate = useNavigate();
  const location = useLocation();
  const editCourse = location.state?.editCourse;

  useEffect(() => {
    if (editCourse) {
      setCourseData({
        ...editCourse,
        id: editCourse.id // ✅ preserve ID in edit mode
      });
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

      // Basic fields
      formData.append('title', courseData.title);
      formData.append('description', courseData.description);
      formData.append('instructor', courseData.instructor);
      formData.append('duration', courseData.duration);
      formData.append('startDate', courseData.startDate);
      formData.append('endDate', courseData.endDate);
      formData.append('level', courseData.level);
      if (courseData.id) formData.append('id', courseData.id);

      // Content handling
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
        alert(`✅ Course "${data.course.title}" ${editCourse ? 'updated' : 'created'} successfully!`);
        navigate('/admin/dashboard');
      } else {
        alert(`❌ ${data.message || 'Failed to save course'}`);
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
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="text-sm bg-gray-700 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Back to Dashboard
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Fields */}
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-1 text-sm text-gray-300">Title</label>
            <input
              id="title"
              name="title"
              value={courseData.title}
              onChange={handleChange}
              placeholder="e.g., Python Basics"
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="instructor" className="mb-1 text-sm text-gray-300">Instructor</label>
            <input
              id="instructor"
              name="instructor"
              value={courseData.instructor}
              onChange={handleChange}
              placeholder="e.g., John Doe"
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="description" className="mb-1 text-sm text-gray-300">Description</label>
            <textarea
              id="description"
              name="description"
              value={courseData.description}
              onChange={handleChange}
              rows={4}
              placeholder="e.g., Learn Python from scratch."
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="duration" className="mb-1 text-sm text-gray-300">Duration</label>
            <input
              id="duration"
              name="duration"
              value={courseData.duration}
              onChange={handleChange}
              placeholder="e.g., 6 weeks"
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="level" className="mb-1 text-sm text-gray-300">Difficulty Level</label>
            <select
              id="level"
              name="level"
              value={courseData.level}
              onChange={handleChange}
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="startDate" className="mb-1 text-sm text-gray-300">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={courseData.startDate}
              onChange={handleChange}
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="endDate" className="mb-1 text-sm text-gray-300">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={courseData.endDate}
              onChange={handleChange}
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Course Content Blocks */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-sm text-gray-300 font-medium">Course Content</label>

            {courseData.content.map((block, index) => (
              <div key={index} className="mb-4 border border-gray-600 rounded-lg p-4 bg-gray-700 space-y-2">
                <select
                  value={block.type}
                  onChange={(e) => updateContentBlock(index, 'type', e.target.value)}
                  className="bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2"
                >
                  <option value="text">Text</option>
                  <option value="video-upload">Video (Upload)</option>
                  <option value="video-link">Video (Link)</option>
                  <option value="audio-upload">Audio (Upload)</option>
                </select>

                {block.type === 'text' && (
  <textarea
    placeholder="Enter lesson text"
    value={block.value}
    onChange={(e) => updateContentBlock(index, 'value', e.target.value)}
    rows={3}
    className="block w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
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
                      className="block w-full text-sm text-gray-300"
                      required
                    />
                    {block.filename && (
                      <p className="text-sm text-gray-400">Selected file: {block.filename}</p>
                    )}
                    {block.value && (
                      <video controls src={block.value} className="mt-3 rounded-lg border border-gray-600 max-w-full" />
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
                      className="block w-full text-sm text-gray-300"
                      required
                    />
                    {block.filename && (
                      <p className="text-sm text-gray-400">Selected file: {block.filename}</p>
                    )}
                    {block.value && (
                      <audio controls src={block.value} className="mt-3 w-full" />
                    )}
                  </>
                )}

                {block.type === 'video-link' && (
  <div className="col-span-2">
    <input
      type="url"
      placeholder="Paste video URL"
      value={block.value}
      onChange={(e) => updateContentBlock(index, 'value', e.target.value)}
      className="block w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
      required
    />

    {block.value && (
      extractYouTubeID(block.value) ? (
        <iframe
          className="mt-4 w-full rounded-lg border border-gray-600"
          height="350"
          src={`https://www.youtube.com/embed/${extractYouTubeID(block.value)}`}
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <video
          controls
          src={block.value}
          className="mt-4 w-full rounded-lg border border-gray-600"
        />
      )
    )}
  </div>
)}


                <button
                  type="button"
                  onClick={() => removeContentBlock(index)}
                  className="text-red-400 text-sm hover:underline mt-2"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addContentBlock}
              className="mt-2 text-sm text-blue-400 hover:underline"
            >
              + Add Content Block
            </button>
          </div>

          {/* Submit Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/admin/dashboard')}
              className="px-6 py-2 rounded-lg text-gray-300 border border-gray-600 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
            >
              {editCourse ? 'Save Changes' : 'Add Course'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCourse;
