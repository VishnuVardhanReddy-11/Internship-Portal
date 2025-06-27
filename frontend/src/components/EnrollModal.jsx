// src/components/EnrollModal.jsx
import React, { useState, useEffect } from 'react';

// Dummy data for courses and projects
// In a real application, this data would come from an API or a database
const availableCourses = [
  { id: 'react-fundamentals', name: 'React Fundamentals' },
  { id: 'advanced-javascript', name: 'Advanced JavaScript' },
  { id: 'full-stack-development', name: 'Full-Stack Development' },
  { id: 'data-structures-algorithms', name: 'Data Structures & Algorithms' },
  { id: 'machine-learning-basics', name: 'Machine Learning Basics' },
  { id: 'cloud-computing-101', name: 'Cloud Computing 101' },
];

const availableProjects = [
  { id: 'e-commerce-website', name: 'E-commerce Website Build' },
  { id: 'social-media-dashboard', name: 'Social Media Dashboard' },
  { id: 'task-manager-app', name: 'Task Manager App' },
  { id: 'weather-forecast-app', name: 'Weather Forecast App' },
  { id: 'data-visualization-tool', name: 'Data Visualization Tool' },
  { id: 'blockchain-basics-project', name: 'Blockchain Basics Project' },
];

const EnrollModal = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState(''); // 'course' or 'project'
  const [currentOptions, setCurrentOptions] = useState([]); // List of courses or projects
  const [selectedOption, setSelectedOption] = useState(''); // Selected course/project ID

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedType('');
      setCurrentOptions([]);
      setSelectedOption('');
    }
  }, [isOpen]);

  // Update available options when type changes
  useEffect(() => {
    if (selectedType === 'course') {
      setCurrentOptions(availableCourses);
    } else if (selectedType === 'project') {
      setCurrentOptions(availableProjects);
    } else {
      setCurrentOptions([]);
    }
    // Reset selected option whenever the type changes
    setSelectedOption('');
  }, [selectedType]);

  const handleEnrollConfirm = () => {
    if (selectedType && selectedOption) {
      const selectedItemName = currentOptions.find(opt => opt.id === selectedOption)?.name;
      alert(`Successfully enrolled in: ${selectedItemName} (${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)})`);
      onClose(); // Close the modal
    } else {
      alert('Please select both a type and an item to enroll.');
    }
  };

  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-3">Enroll in New Learning</h2>

        <div className="mb-4">
          <label htmlFor="type-select" className="block text-gray-700 text-sm font-semibold mb-2">
            Choose Type:
          </label>
          <select
            id="type-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select a type</option>
            <option value="course">Course</option>
            <option value="project">Project</option>
          </select>
        </div>

        {selectedType && (
          <div className="mb-6">
            <label htmlFor="item-select" className="block text-gray-700 text-sm font-semibold mb-2">
              Select {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}:
            </label>
            <select
              id="item-select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={currentOptions.length === 0}
            >
              <option value="" disabled>Select an option</option>
              {currentOptions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {currentOptions.length === 0 && (
              <p className="text-sm text-gray-500 mt-2">No {selectedType}s available.</p>
            )}
          </div>
        )}

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleEnrollConfirm}
            className={`px-4 py-2 bg-blue-600 text-white rounded-md transition-colors ${!selectedOption ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            disabled={!selectedOption}
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrollModal;
