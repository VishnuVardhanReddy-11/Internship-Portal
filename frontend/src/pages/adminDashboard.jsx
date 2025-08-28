import React, { useState, useEffect, useRef } from 'react';
import {
  Users, BookOpen, FolderOpen, TrendingUp, DollarSign,
  Eye, Star, Calendar, Search, Bell, Settings,
  ChevronDown, Plus, Edit, Trash2, BarChart3,
  Activity, Award, Clock, Download, X
} from 'lucide-react';
import { useNavigate, useLocation  } from 'react-router-dom';
// --- Modals for Courses ---

const ViewCourseModal = ({ isOpen, onClose, course }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/80 to-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
      {/* Changed p-8 to p-6 for smaller vertical size */}
      <div className="bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 w-full max-w-md relative shadow-2xl animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-white mb-6">Course Details: {course.title}</h2>
        <div className="space-y-4 text-gray-300">
          <div>
            <p className="font-medium text-white">Description:</p>
            <p>{course.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-white">Instructor:</p>
              <p>{course.instructor}</p>
            </div>
            <div>
              <p className="font-medium text-white">Duration:</p>
              <p>{course.duration}</p>
            </div>
            <div>
              <p className="font-medium text-white">Start Date:</p>
              <p>{course.startDate}</p>
            </div>
            <div>
              <p className="font-medium text-white">End Date:</p>
              <p>{course.endDate}</p>
            </div>
            <div>
              <p className="font-medium text-white">Students:</p>
              <p>{course.students?.toLocaleString() || 0}</p>
            </div>
            <div>
              <p className="font-medium text-white">Rating:</p>
              <p>{course.rating || 'N/A'}</p>
            </div>
            <div>
              <p className="font-medium text-white">Status:</p>
              <p>{course.status}</p>
            </div>
            <div>
              <p className="font-medium text-white">Revenue:</p>
              <p>{course.revenue}</p>
            </div>
          </div>
          {course.content && course.content.length > 0 && (
            <div>
              <p className="font-medium text-white">Content:</p>
              <ul className="list-disc list-inside ml-4">
                {course.content.map((item, index) => (
                    <li key={index}>
                    {item.type === 'text' && item.value}
                    {item.type === 'video-link' && `Video Link: ${item.value}`}
                    {item.type === 'video-upload' && `Uploaded Video: ${item.filename || item.value}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-end pt-6">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const EditCourseModal = ({ isOpen, onClose, onSave, course }) => {
  const [editedCourseData, setEditedCourseData] = useState(course || {
    title: '',
    description: '',
    instructor: '',
    duration: '',
    startDate: '',
    endDate: '',
    status: '', // Added status for editing
    content: []
  });

  useEffect(() => {
    if (course) {
      setEditedCourseData(course);
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCourseData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const updateContentBlock = (index, key, value) => {
  const updatedContent = [...editedCourseData.content];
  updatedContent[index][key] = value;
  setEditedCourseData(prev => ({
    ...prev,
    content: updatedContent
  }));
};

const addContentBlock = () => {
  setEditedCourseData(prev => ({
    ...prev,
    content: [...prev.content, { type: 'text', value: '', filename: '' }]
  }));
};

const removeContentBlock = (index) => {
  const updated = [...editedCourseData.content];
  updated.splice(index, 1);
  setEditedCourseData(prev => ({ ...prev, content: updated }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedCourseData);
    onClose();
  };

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/80 to-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
      {/* Changed p-8 to p-6 for smaller vertical size */}
      <div className="bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 w-full max-w-md relative shadow-2xl animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-white mb-6">Edit Course: {course.title}</h2>
        {/* Changed space-y-4 to space-y-3 for smaller vertical gaps */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="editTitle" className="block text-gray-300 text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              id="editTitle"
              name="title"
              value={editedCourseData.title}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              required
            />
          </div>
          <div>
            <label htmlFor="editDescription" className="block text-gray-300 text-sm font-medium mb-1">Description</label>
            <textarea
              id="editDescription"
              name="description"
              value={editedCourseData.description}
              onChange={handleChange}
              rows="3"
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="editInstructor" className="block text-gray-300 text-sm font-medium mb-1">Instructor</label>
            <input
              type="text"
              id="editInstructor"
              name="instructor"
              value={editedCourseData.instructor}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              required
            />
          </div>
          <div>
            <label htmlFor="editDuration" className="block text-gray-300 text-sm font-medium mb-1">Duration</label>
            <input
              type="text"
              id="editDuration"
              name="duration"
              value={editedCourseData.duration}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              required
            />
          </div>
          <div>
            <label htmlFor="editStartDate" className="block text-gray-300 text-sm font-medium mb-1">Start Date</label>
            <input
              type="date"
              id="editStartDate"
              name="startDate"
              value={editedCourseData.startDate}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              required
            />
          </div>
          <div>
            <label htmlFor="editEndDate" className="block text-gray-300 text-sm font-medium mb-1">End Date</label>
            <input
              type="date"
              id="editEndDate"
              name="endDate"
              value={editedCourseData.endDate}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              required
            />
          </div>
          <div>
            <label htmlFor="editStatus" className="block text-gray-300 text-sm font-medium mb-1">Status</label>
            <select
              id="editStatus"
              name="status"
              value={editedCourseData.status}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none"
            >
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div>
  <label className="block text-gray-300 text-sm font-medium mb-2">Course Content</label>

  {editedCourseData.content.map((block, index) => (
    <div key={index} className="space-y-2 border border-gray-700 p-3 rounded-md mb-4">
      <select
        value={block.type}
        onChange={(e) => updateContentBlock(index, 'type', e.target.value)}
        className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
      >
        <option value="text">Text</option>
        <option value="video-link">Video-Link</option>
        <option value="video-upload">Video-Upload</option>
      </select>

      {block.type === 'text' && (
        <textarea
          value={block.value}
          onChange={(e) => updateContentBlock(index, 'value', e.target.value)}
          rows={3}
          className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
        />
      )}

      {block.type === 'video-link' && (
        <input
          type="url"
          value={block.value}
          onChange={(e) => updateContentBlock(index, 'value', e.target.value)}
          className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
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
            className="text-white"
          />
          {block.filename && (
            <p className="text-sm text-gray-400">Uploaded: {block.filename}</p>
          )}
        </>
      )}

      <button
        type="button"
        onClick={() => removeContentBlock(index)}
        className="text-red-400 text-sm hover:underline"
      >
        Remove
      </button>
    </div>
  ))}

  <button
    type="button"
    onClick={addContentBlock}
    className="text-sm text-blue-400 hover:underline mt-2"
  >
    + Add Content Block
  </button>
</div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-3 px-6 py-2 rounded-xl text-gray-300 border border-gray-600 hover:bg-gray-700/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


// --- Modals for Projects ---

const AddProjectModal = ({ isOpen, onClose, onSave }) => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    difficulty: 'Beginner', // Default value
    category: '',
  });

  useEffect(() => {
    if (!isOpen) {
      setProjectData({ // Reset form when modal closes
        title: '',
        description: '',
        difficulty: 'Beginner',
        category: '',
      });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(projectData);
    onClose();
  };

  if (!isOpen) return null;

  return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/80 to-black/80 flex items-start justify-center z-50 p-4 overflow-y-scroll">
      {/* Changed p-8 to p-6 for smaller vertical size */}
<div className="bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-scroll relative shadow-2xl animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-white mb-6">Add New Project</h2>
        {/* Changed space-y-4 to space-y-3 for smaller vertical gaps */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="projectTitle" className="block text-gray-300 text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              id="projectTitle"
              name="title"
              value={projectData.title}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              placeholder="e.g., Portfolio Website"
              required
            />
          </div>
          <div>
            <label htmlFor="projectDescription" className="block text-gray-300 text-sm font-medium mb-1">Description</label>
            <textarea
              id="projectDescription"
              name="description"
              value={projectData.description}
              onChange={handleChange}
              rows="3"
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              placeholder="A brief description of the project."
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="projectCategory" className="block text-gray-300 text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              id="projectCategory"
              name="category"
              value={projectData.category}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              placeholder="e.g., Frontend, Backend, Full Stack, Data Science"
              required
            />
          </div>
          <div>
            <label htmlFor="projectDifficulty" className="block text-gray-300 text-sm font-medium mb-1">Difficulty</label>
            <select
              id="projectDifficulty"
              name="difficulty"
              value={projectData.difficulty}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-3 px-6 py-2 rounded-xl text-gray-300 border border-gray-600 hover:bg-gray-700/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ViewProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/80 to-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
      {/* Changed p-8 to p-6 for smaller vertical size */}
      <div className="bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 w-full max-w-md relative shadow-2xl animate-scale-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-white mb-6">Project Details: {project.title}</h2>
        <div className="space-y-4 text-gray-300">
          <div>
            <p className="font-medium text-white">Description:</p>
            <p>{project.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-white">Category:</p>
              <p>{project.category}</p>
            </div>
            <div>
              <p className="font-medium text-white">Difficulty:</p>
              <p>{project.difficulty}</p>
            </div>
            <div>
              <p className="font-medium text-white">Submissions:</p>
              <p>{project.submissions}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-6">
          <button
            onClick={onClose}
            className="bg-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-purple-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const EditProjectModal = ({ isOpen, onClose, onSave, project }) => {
  const [editedProjectData, setEditedProjectData] = useState(project || {
    title: '',
    description: '',
    difficulty: 'Beginner',
    category: '',
  });

  useEffect(() => {
    if (project) {
      setEditedProjectData(project);
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProjectData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedProjectData);
    onClose();
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/80 to-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
      {/* Changed p-8 to p-6 for smaller vertical size */}
      <div className="bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 w-full max-w-md relative shadow-2xl animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-white mb-6">Edit Project: {project.title}</h2>
        {/* Changed space-y-4 to space-y-3 for smaller vertical gaps */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="editProjectTitle" className="block text-gray-300 text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              id="editProjectTitle"
              name="title"
              value={editedProjectData.title}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              required
            />
          </div>
          <div>
            <label htmlFor="editProjectDescription" className="block text-gray-300 text-sm font-medium mb-1">Description</label>
            <textarea
              id="editProjectDescription"
              name="description"
              value={editedProjectData.description}
              onChange={handleChange}
              rows="3"
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="editProjectCategory" className="block text-gray-300 text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              id="editProjectCategory"
              name="category"
              value={editedProjectData.category}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              required
            />
          </div>
          <div>
            <label htmlFor="editProjectDifficulty" className="block text-gray-300 text-sm font-medium mb-1">Difficulty</label>
            <select
              id="editProjectDifficulty"
              name="difficulty"
              value={editedProjectData.difficulty}
              onChange={handleChange}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4.5 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-3 px-6 py-2 rounded-xl text-gray-300 border border-gray-600 hover:bg-gray-700/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- Confirmation Modal ---

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/80 to-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
      {/* Changed p-8 to p-6 for smaller vertical size */}
      <div className="bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 w-full max-w-sm relative shadow-2xl animate-scale-in">
        <h2 className="text-xl font-bold text-white mb-4">Confirm Deletion</h2>
        <p className="text-gray-300 mb-6">{message}</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl text-gray-300 border border-gray-600 hover:bg-gray-700/50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};


// --- AdminDashboard Component ---

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  // Course Modals State
  const [isViewCourseModalOpen, setIsViewCourseModalOpen] = useState(false);
  const [isEditCourseModalOpen, setIsEditCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Project Modals State
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isViewProjectModalOpen, setIsViewProjectModalOpen] = useState(false);
  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Delete Confirmation Modal State
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Simulated data
  const stats = {
    totalUsers: 12847,
    activeCourses: 156,
    totalProjects: 89,
    monthlyRevenue: 45280,
    courseCompletions: 2341,
    avgRating: 4.8,
    newSignups: 324,
    activeNow: 187
  };

  const [recentCourses, setRecentCourses] = useState([
    { id: 1, title: 'Advanced React Development', description: 'Deep dive into React hooks, context API, and performance optimization.', instructor: 'Jane Smith', duration: '8 weeks', startDate: '2025-07-01', endDate: '2025-08-26', students: 1247, rating: 4.9, status: 'active', revenue: '$3,240', content: ['Module 1: Advanced Hooks', 'Module 2: Context & Reducers'] },
    { id: 2, title: 'Machine Learning Fundamentals', description: 'Introduction to supervised and unsupervised learning algorithms with practical examples.', instructor: 'Dr. Alan Turing', duration: '10 weeks', startDate: '2025-07-15', endDate: '2025-09-20', students: 892, rating: 4.7, status: 'active', revenue: '$2,890', content: [] },
    { id: 3, title: 'UI/UX Design Masterclass', description: 'Learn principles of user interface and user experience design from prototyping to testing.', instructor: 'Alice Wonderland', duration: '6 weeks', startDate: '2025-08-01', endDate: '2025-09-15', students: 1534, rating: 4.8, status: 'active', revenue: '$4,120', content: [] },
    { id: 4, title: 'Python for Beginners', description: 'Start your programming journey with Python, covering basics like variables, loops, and functions.', instructor: 'John Doe', duration: '6 weeks', startDate: '2025-07-01', endDate: '2025-08-15', students: 2103, rating: 4.6, status: 'active', revenue: '$1,680', content: [] },
    { id: 5, title: 'DevOps Engineering', description: 'Understand CI/CD pipelines, Docker, and Kubernetes for modern software deployment.', instructor: 'Bob Builder', duration: '12 weeks', startDate: '2025-09-01', endDate: '2025-11-25', students: 567, rating: 4.9, status: 'draft', revenue: '$1,890', content: [] }
  ]);

const location = useLocation();
const hasHandledNewCourse = useRef(false); // add above useEffect

useEffect(() => {
  const newCourse = location.state?.newCourse;
  const isEdit = location.state?.isEdit;

  // Guard to ensure this block runs only once
  if (newCourse && !hasHandledNewCourse.current) {
    hasHandledNewCourse.current = true;

    setRecentCourses(prevCourses => {
      if (isEdit && newCourse.id != null) {
        return prevCourses.map(course =>
          course.id === newCourse.id ? { ...newCourse } : course
        );
      }

      const newId = prevCourses.length > 0 ? Math.max(...prevCourses.map(c => c.id)) + 1 : 1;
      return [
        ...prevCourses,
        {
          id: newId,
          ...newCourse,
          students: 0,
          rating: 0,
          status: 'draft',
          revenue: '$0'
        }
      ];
    });

    // Clean up the navigation state so it doesn't re-trigger
    navigate(location.pathname, { replace: true });
  }
}, [location.state, navigate]);


  const [recentProjects, setRecentProjects] = useState([
    { id: 1, title: 'E-commerce Platform', description: 'Build a full-stack e-commerce application with user authentication, product listings, and a shopping cart.', submissions: 234, difficulty: 'Advanced', category: 'Full Stack' },
    { id: 2, title: 'Weather App', description: 'Create a responsive web application that fetches and displays weather data from an API.', submissions: 892, difficulty: 'Beginner', category: 'Frontend' },
    { id: 3, title: 'Chat Application', description: 'Develop a real-time chat application using WebSockets for instant messaging.', submissions: 456, difficulty: 'Intermediate', category: 'Backend' },
    { id: 4, title: 'Data Visualization', description: 'Design and implement interactive data visualizations using a charting library and a dataset of your choice.', submissions: 321, difficulty: 'Advanced', category: 'Data Science' }
  ]);

  useEffect(() => {
    setAnimationClass('animate-pulse');
    const timer = setTimeout(() => setAnimationClass(''), 200);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Course Handlers

  const handleViewCourseClick = (course) => {
    setSelectedCourse(course);
    setIsViewCourseModalOpen(true);
  };

  const handleEditCourseClick = (course) => {
     navigate('/newcourse', { state: { editCourse: course } });
  };

  const handleSaveEditedCourse = (updatedCourse) => {
    setRecentCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
    alert(`Course "${updatedCourse.title}" updated successfully!`);
  };

  // Project Handlers
  const handleSaveNewProject = (newProjectData) => {
    const newId = recentProjects.length > 0 ? Math.max(...recentProjects.map(p => p.id)) + 1 : 1;
    const addedProject = {
      id: newId,
      ...newProjectData,
      submissions: 0,
    };
    setRecentProjects(prevProjects => [...prevProjects, addedProject]);
    alert(`Project "${newProjectData.title}" added successfully!`);
  };

  const handleViewProjectClick = (project) => {
    setSelectedProject(project);
    setIsViewProjectModalOpen(true);
  };

  const handleEditProjectClick = (project) => {
    setSelectedProject(project);
    setIsEditProjectModalOpen(true);
  };

  const handleSaveEditedProject = (updatedProject) => {
    setRecentProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
    alert(`Project "${updatedProject.title}" updated successfully!`);
  };

  // Delete Confirmation Handlers
  const handleDeleteClick = (id, type) => {
    setItemToDelete({ id, type });
    setIsConfirmModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      if (itemToDelete.type === 'course') {
        setRecentCourses(prevCourses => prevCourses.filter(course => course.id !== itemToDelete.id));
        alert(`Course with ID ${itemToDelete.id} deleted successfully!`);
      } else if (itemToDelete.type === 'project') {
        setRecentProjects(prevProjects => prevProjects.filter(project => project.id !== itemToDelete.id));
        alert(`Project with ID ${itemToDelete.id} deleted successfully!`);
      }
      setItemToDelete(null);
      setIsConfirmModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setItemToDelete(null);
    setIsConfirmModalOpen(false);
  };


  const StatCard = ({ icon: Icon, title, value, change, color = "blue" }) => (
   <div className={`bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${animationClass}`}>
    <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {change} from last month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-r ${color === 'blue' ? 'from-blue-500/20 to-cyan-500/20' :
          color === 'green' ? 'from-green-500/20 to-emerald-500/20' :
            color === 'purple' ? 'from-purple-500/20 to-pink-500/20' :
              'from-orange-500/20 to-red-500/20'}`}>
          <Icon className={`w-6 h-6 ${color === 'blue' ? 'text-blue-400' :
            color === 'green' ? 'text-green-400' :
              color === 'purple' ? 'text-purple-400' :
                'text-orange-400'}`} />
        </div>
      </div>
    </div>
  );

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30'
          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium">{label}</span>
    </button>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          change="+12%"
          color="blue"
        />
        <StatCard
          icon={BookOpen}
          title="Active Courses"
          value={stats.activeCourses}
          change="+8%"
          color="green"
        />
        <StatCard
          icon={FolderOpen}
          title="Total Projects"
          value={stats.totalProjects}
          change="+15%"
          color="purple"
        />
        <StatCard
          icon={DollarSign}
          title="Monthly Revenue"
          value={`$${stats.monthlyRevenue.toLocaleString()}`}
          change="+23%"
          color="orange"
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Award}
          title="Course Completions"
          value={stats.courseCompletions.toLocaleString()}
          change="+18%"
          color="green"
        />
        <StatCard
          icon={Star}
          title="Average Rating"
          value={stats.avgRating}
          change="+0.2%"
          color="purple"
        />
        <StatCard
          icon={TrendingUp}
          title="New Signups"
          value={stats.newSignups}
          change="+34%"
          color="blue"
        />
        <StatCard
          icon={Activity}
          title="Active Now"
          value={stats.activeNow}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New course published', item: 'Advanced React Development', time: '2 hours ago', type: 'success' },
              { action: 'User milestone reached', item: '10K+ students enrolled', time: '4 hours ago', type: 'info' },
              { action: 'Project submitted', item: 'E-commerce Platform', time: '6 hours ago', type: 'warning' },
              { action: 'Course updated', item: 'Machine Learning Fundamentals', time: '1 day ago', type: 'info' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-400' :
                    activity.type === 'warning' ? 'bg-yellow-400' :
                      'bg-blue-400'
                  }`} />
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-gray-400 text-xs">{activity.item}</p>
                </div>
                <span className="text-gray-500 text-xs">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Top Performing Courses</h3>
          <div className="space-y-4">
            {recentCourses.slice(0, 4).map((course, index) => (
              <div key={course.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700/30 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{course.title}</p>
                  <p className="text-gray-400 text-xs">{course.students} students</p>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm font-medium">{course.revenue}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-gray-400 text-xs">{course.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <h2 className="text-2xl font-bold text-white">Course Management</h2>
        <button
          onClick={() => navigate('/admin/newCourse')}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center gap-2 hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          Add New Course
        </button>
      </div>

      <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-700/50 text-gray-300 px-4 py-3 rounded-xl hover:bg-gray-600/50 transition-colors">
                Filter
              </button>
              <button className="bg-gray-700/50 text-gray-300 px-4 py-3 rounded-xl hover:bg-gray-600/50 transition-colors">
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700/30">
              <tr>
                <th className="text-left p-4 text-gray-300 font-medium">Course</th>
                <th className="text-left p-4 text-gray-300 font-medium">Students</th>
                <th className="text-left p-4 text-gray-300 font-medium">Rating</th>
                <th className="text-left p-4 text-gray-300 font-medium">Revenue</th>
                <th className="text-left p-4 text-gray-300 font-medium">Status</th>
                <th className="text-left p-4 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentCourses.map((course) => (
                <tr key={course.id} className="border-t border-gray-700/50 hover:bg-gray-700/20 transition-colors">
                  <td className="p-4">
                    <div className="text-white font-medium">{course.title}</div>
                  </td>
                  <td className="p-4 text-gray-300">{course.students.toLocaleString()}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300">{course.rating}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{course.revenue}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.status === 'active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleViewCourseClick(course)}
                        className="p-2.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditCourseClick(course)}
                        className="p-2.5 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(course.id, 'course')}
                        className="p-2.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modals for Courses */}
      <ViewCourseModal
        isOpen={isViewCourseModalOpen}
        onClose={() => {setIsViewCourseModalOpen(false); setSelectedCourse(null);}}
        course={selectedCourse}
      />
      <EditCourseModal
        isOpen={isEditCourseModalOpen}
        onClose={() => {setIsEditCourseModalOpen(false); setSelectedCourse(null);}}
        onSave={handleSaveEditedCourse}
        course={selectedCourse}
      />
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <h2 className="text-2xl font-bold text-white">Project Management</h2>
        <button
          onClick={() => setIsAddProjectModalOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recentProjects.map((project) => (
          <div key={project.id} className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <FolderOpen className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => handleViewProjectClick(project)}
                  className="p-2.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleEditProjectClick(project)}
                  className="p-2.5 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteClick(project.id, 'project')}
                  className="p-2.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.category}</p>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Submissions</span>
                <span className="text-white font-medium">{project.submissions}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Difficulty</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                  }`}>
                  {project.difficulty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modals for Projects */}
      <AddProjectModal
        isOpen={isAddProjectModalOpen}
        onClose={() => setIsAddProjectModalOpen(false)}
        onSave={handleSaveNewProject}
      />
      <ViewProjectModal
        isOpen={isViewProjectModalOpen}
        onClose={() => {setIsViewProjectModalOpen(false); setSelectedProject(null);}}
        project={selectedProject}
      />
      <EditProjectModal
        isOpen={isEditProjectModalOpen}
        onClose={() => {setIsEditProjectModalOpen(false); setSelectedProject(null);}}
        onSave={handleSaveEditedProject}
        project={selectedProject}
      />
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Analytics & Insights</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Revenue Trends</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-400">Revenue chart visualization would go here</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">User Engagement</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <Activity className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-gray-400">Engagement chart visualization would go here</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">87%</div>
            <div className="text-gray-400">Course Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">4.8/5</div>
            <div className="text-gray-400">Average Course Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24min</div>
            <div className="text-gray-400">Avg. Session Duration</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50 sticky top-0 z-20">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Hair Coaction</h1>
                  <p className="text-gray-400 text-sm">Course & Project Management</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <button className="p-3 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-3 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
              </div> */}
              {/* logout button  */}
          <button
            onClick={async () => {
              try {
                const res = await axios.post(
                  "http://localhost:3000/user/logout",
                  {},
                  { withCredentials: true }
                );

                if (res.status === 200) {
                  alert("Logged out successfully");
                  navigate("/");
                } else {
                  alert("Logout failed. Please try again.");
                }
              } catch (error) {
                console.error("Logout failed:", error);
                alert(
                  error.response?.data?.message ||
                    "Logout failed. Please try again."
                );
              }
            }}
            style={{
              padding: "11px 40px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            Logout
          </button>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-gray-900/60 backdrop-blur-xl border-b border-gray-700/30 sticky top-16 z-10">
          <div className="px-6 py-4">
            <div className="flex gap-2 overflow-x-auto">
              {/* <TabButton
                id="overview"
                label=""
                icon={BarChart3}
                isActive={activeTab === 'overview'}
                onClick={setActiveTab}
              /> */}
              <TabButton
                id="courses"
                label="Courses"
                icon={BookOpen}
                isActive={activeTab === 'courses'}
                onClick={setActiveTab}
              />
              <TabButton
                id="projects"
                label="Projects"
                icon={FolderOpen}
                isActive={activeTab === 'projects'}
                onClick={setActiveTab}
              />
              <TabButton
                id="overview"
                label="Add Internship"
                icon={BarChart3}
                isActive={activeTab === 'overview'}
                onClick={setActiveTab}
              />
              <TabButton
                id="analytics"
                label="All Users"
                icon={TrendingUp}
                isActive={activeTab === 'analytics'}
                onClick={setActiveTab}
              />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="px-6 py-8">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'courses' && renderCourses()}
          {activeTab === 'projects' && renderProjects()}
          {activeTab === 'analytics' && renderAnalytics()}
        </main>
      </div>

      {/* Confirmation Modal (placed outside main for global access) */}
      <ConfirmationModal
        isOpen={isConfirmModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        message={`Are you sure you want to delete this ${itemToDelete?.type || 'item'}? This action cannot be undone.`}
      />
    </div>
  );
};

export default AdminDashboard;