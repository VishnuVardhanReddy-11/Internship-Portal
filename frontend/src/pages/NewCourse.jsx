import React, { useState } from 'react';
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

React.useEffect(() => {
  if (editCourse) {
    setCourseData({
      ...editCourse,
      id: editCourse.id // ✅ explicitly preserve the ID
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = editCourse
  ? `Course "${courseData.title}" updated successfully!`
  : `Course "${courseData.title}" added successfully!`;

alert(message);
navigate('/admin/dashboard', {
  state: {
    newCourse: {
      ...courseData,
      id: courseData.id || editCourse?.id // ✅ fallback just in case
    },
    isEdit: Boolean(editCourse),
  }
});


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
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <label className="text-sm text-gray-200">Type</label>
                  <select
                    value={block.type}
                    onChange={(e) => updateContentBlock(index, 'type', e.target.value)}
                    className="bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="text">Text</option>
                    <option value="video-upload">Video (Upload)</option>
                    <option value="video-link">Video (Link)</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-200">Content</label>

                  {block.type === 'text' && (
                    <textarea
                      placeholder="Enter lesson text"
                      value={block.value}
                      onChange={(e) => updateContentBlock(index, 'value', e.target.value)}
                      rows={3}
                      className="bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  )}

                  {block.type === 'video-upload' && (
                    <>
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const videoURL = URL.createObjectURL(file);
                            updateContentBlock(index, 'value', videoURL);
                            updateContentBlock(index, 'filename', file.name);
                          }
                        }}
                        className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
                          file:rounded-md file:border-0 file:text-sm file:font-semibold
                          file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                        required
                      />
                      {block.filename && (
                        <p className="mt-1 text-sm text-gray-400">Selected file: {block.filename}</p>
                      )}
                      {block.value && (
                        <video
                          controls
                          src={block.value}
                          className="mt-3 rounded-lg border border-gray-600 max-w-full"
                          style={{ maxHeight: '300px' }}
                        />
                      )}
                    </>
                  )}

                  {block.type === 'video-link' && (
                    <>
                      <input
                        type="url"
                        placeholder="Paste video URL (e.g., https://youtube.com/...)"
                        value={block.value}
                        onChange={(e) => updateContentBlock(index, 'value', e.target.value)}
                        className="bg-gray-800 text-white border border-gray-600 rounded-md px-3 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      {block.value && (
                        <>
                          {extractYouTubeID(block.value) ? (
                            <iframe
                              className="mt-3 w-full rounded-lg border border-gray-600"
                              style={{ height: "300px" }}
                              src={`https://www.youtube.com/embed/${extractYouTubeID(block.value)}`}
                              title="YouTube Video"
                              frameBorder="0"
                              allowFullScreen
                            ></iframe>
                          ) : (
                            <video
                              controls
                              src={block.value}
                              className="mt-3 rounded-lg border border-gray-600 max-w-full"
                              style={{ maxHeight: '300px' }}
                            />
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>

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
              className="px-6 py-2 rounded-lg text-gray-300 border border-gray-600 hover:bg-gray-700 transition-colors"
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
