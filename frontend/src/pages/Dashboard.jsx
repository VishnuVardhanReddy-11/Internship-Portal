// src/Dashboard.js
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User, BookOpen, Award, TrendingUp, Clock, Filter, PlusCircle, ChevronUp, Layers
} from 'lucide-react'; // Added Layers icon for "My Courses" link
import '../styles/Dashboard.css';
import EnrollModal from '../components/EnrollModal'; // Import the EnrollModal component
import axios from 'axios';
// --- Utility Functions (Keep these in src/utils/dashboardUtils.js if you have it) ---
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const getProgressColor = (progress) => {
    if (progress < 25) return 'red';
    if (progress < 50) return 'orange';
    if (progress < 75) return 'yellow';
    if (progress < 100) return 'blue';
    return 'green';
};

const getStatusClass = (status) => {
    const statusMap = {
        'In Progress': 'in-progress',
        'Completed': 'completed',
        'Enrolled': 'enrolled',
        'Dropped': 'dropped'
    };
    return statusMap[status] || '';
};

const getRandomTimeRemaining = () => {
    const days = Math.floor(Math.random() * 30) + 1;
    const hours = Math.floor(Math.random() * 24);
    return `${days}d ${hours}h left`;
};
// --- End of Utility Functions ---


// --- Mock Data for New Filters and Trending Items ---
// This data is specifically for the new filter categories and the trending section.
const professionOptions = [
  { name: 'College Student', count: 417, value: 'College Student' },
  { name: 'School Student', count: 11, value: 'School Student' },
  { name: 'Working Professional', count: 413, value: 'Working Professional' },
];

const programOptions = [
  { name: 'Bootcamp', count: 16, value: 'Bootcamp' },
  { name: 'Community Programs', count: 59, value: 'Community Programs' },
];

const categoryOptions = [
  { name: 'Aptitude', count: 7, value: 'Aptitude' },
  { name: 'Technical', count: 20, value: 'Technical' },
  { name: 'Soft Skills', count: 12, value: 'Soft Skills' },
  { name: 'Business', count: 15, value: 'Business' },
];

// Mock data for the "Trending Learning Opportunities" section
const mockTrendingItemsData = [
  { id: 201, name: 'AI for Business Leaders', description: 'Understand AI strategy for enterprises.', duration: '6 weeks', type: 'course', domain: 'Artificial Intelligence', profession: 'Working Professional', program: 'Bootcamp', categories: ['Technical', 'Business'] },
  { id: 202, name: 'Web Dev Fundamentals', description: 'HTML, CSS, JS for beginners.', duration: '4 weeks', type: 'course', domain: 'Web Development', profession: 'College Student', program: 'Community Programs', categories: ['Technical'] },
  { id: 203, name: 'Competitive Programming Basics', description: 'Sharpen your problem-solving skills.', duration: '8 weeks', type: 'course', domain: 'Computer Science', profession: 'School Student', program: 'Bootcamp', categories: ['Aptitude', 'Technical'] },
  { id: 204, name: 'Data Science with Python', description: 'Hands-on data analysis projects.', duration: '10 weeks', type: 'project', domain: 'Data Science', profession: 'Working Professional', program: 'Bootcamp', categories: ['Technical', 'Business'] },
  { id: 205, name: 'Mobile App Design (UI/UX)', description: 'Learn principles of mobile UI/UX.', duration: '5 weeks', type: 'course', domain: 'Design', profession: 'College Student', program: 'Bootcamp', categories: ['Soft Skills', 'Technical'] },
  { id: 206, name: 'Aptitude Test Prep', description: 'Prepare for common aptitude tests.', duration: '3 weeks', type: 'course', domain: 'General', profession: 'College Student', program: 'Community Programs', categories: ['Aptitude'] },
  { id: 207, name: 'Public Speaking Workshop', description: 'Improve your communication skills.', duration: '2 weeks', type: 'course', domain: 'Soft Skills', profession: 'Working Professional', program: 'Community Programs', categories: ['Soft Skills'] },
  { id: 208, name: 'Game Development with Unity', description: 'Build your first 3D game.', duration: '12 weeks', type: 'project', domain: 'Game Development', profession: 'School Student', program: 'Bootcamp', categories: ['Technical'] },
  { id: 209, name: 'Digital Marketing Fundamentals', description: 'Basics of online advertising and SEO.', duration: '6 weeks', type: 'course', domain: 'Marketing', profession: 'Working Professional', program: 'Community Programs', categories: ['Business'] },
  { id: 210, name: 'Cloud Security Fundamentals', description: 'Secure cloud deployments on AWS.', duration: '7 weeks', type: 'course', domain: 'Cloud Computing', profession: 'Working Professional', program: 'Bootcamp', categories: ['Technical'] },
  { id: 211, name: 'Vedic Maths for Kids', description: 'Quick calculation techniques.', duration: '4 weeks', type: 'course', domain: 'Mathematics', profession: 'School Student', program: 'Community Programs', categories: ['Aptitude'] },
  { id: 212, name: 'Personal Finance Basics', description: 'Manage your money effectively.', duration: '3 weeks', type: 'course', domain: 'Finance', profession: 'College Student', program: 'Community Programs', categories: ['Business', 'Soft Skills'] },
];
// --- End of Mock Data ---


const Dashboard = () => {
  const navigate = useNavigate();

  // State for controlling the EnrollModal visibility
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  // Certifications remain on the Dashboard
  const [certifications] = useState([
    {
      id: 1,
      title: 'Full Stack Web Developer',
      issueDate: '2024-09-15',
      credentialId: 'FWD-2024-001',
      domain: 'Web Development'
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      issueDate: '2024-11-20',
      credentialId: 'MLF-2024-007',
      domain: 'Artificial Intelligence'
    },
  ]);

  // States for the new filters
  const [selectedProfessionFilter, setSelectedProfessionFilter] = useState('');
  const [selectedProgramFilter, setSelectedProgramFilter] = useState('');
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState([]);

  // Memoized version of the mock trending data (acts as our base for filtering)
  const allTrendingLearningOpportunities = useMemo(() => mockTrendingItemsData, []);

  // State for the filtered items displayed in "Trending Learning Opportunities"
  const [filteredTrendingItems, setFilteredTrendingItems] = useState([]);

  // Effect to filter trending items based on selected filters
  useEffect(() => {
      let filtered = allTrendingLearningOpportunities;

      if (selectedProfessionFilter) {
          filtered = filtered.filter(item => item.profession === selectedProfessionFilter);
      }

      if (selectedProgramFilter) {
          filtered = filtered.filter(item => item.program === selectedProgramFilter);
      }

      if (selectedCategoryFilters.length > 0) {
          filtered = filtered.filter(item =>
              item.categories.some(cat => selectedCategoryFilters.includes(cat))
          );
      }

      setFilteredTrendingItems(filtered);

  }, [selectedProfessionFilter, selectedProgramFilter, selectedCategoryFilters, allTrendingLearningOpportunities]);

  // Handle Category checkbox changes
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategoryFilters(prev =>
      checked ? [...prev, value] : prev.filter(cat => cat !== value)
    );
  };

  // Function to open the enrollment modal
  const handleEnrollNewClick = () => {
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <div className="avatar">
            <User color="white" className="icon-large" />
          </div>
          <div className="welcome-text">
            <h1>Welcome back, Deep!</h1>
            <p>Continue your learning journey</p>
          </div>
        </div>
        <div className="header-right-buttons">
            <button
                className="enroll-new-btn"
                onClick={handleEnrollNewClick}
            >
                <PlusCircle size={20} /> Enroll New
            </button>
            {/* New button to navigate to CoursesPage */}
            <button
                className="enroll-new-btn"
                onClick={() => navigate('/courses')}
                style={{ backgroundColor: 'var(--accent-green)' }} // Differentiate visually
            >
                <Layers size={20} /> My Courses
            </button>
            <button className="Btn" onClick={async () => {
  try {
    await axios.post('http://localhost:3000/user/logout', {}, {
      withCredentials: true,
    });
    alert('Logged out');
    navigate('/');
  } catch (error) {
    console.error("Logout failed:", error);
    alert('Logout failed. Try again.');
  }
}}>
  <div className="sign">
    <svg viewBox="0 0 512 512">
      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </svg>
  </div>
  <div className="text">Logout</div>
</button>

        </div>
      </div>

      {/* Main Grid - Two Columns: Filters on Left, Content on Right */}
      <div className="main-grid">

        {/* Left Column: Filters Sidebar */}
        <div className="sidebar-left filter-sidebar">
          <div className="section-card filter-card">
            <div className="section-header">
              <div className="section-icon gray">
                <Filter color="white" className="icon" />
              </div>
              <h2>Filters</h2>
            </div>

            {/* Filter by Profession */}
            <div className="filter-group">
                <div className="filter-section-header">
                    <h3>Filter by Profession</h3>
                    <ChevronUp size={20} className="chevron-icon" />
                </div>
                <div className="filter-radio-group">
                    {professionOptions.map(option => (
                        <label key={option.value}>
                            <input
                                type="radio"
                                value={option.value}
                                checked={selectedProfessionFilter === option.value}
                                onChange={() => setSelectedProfessionFilter(option.value)}
                            /> {option.name} ({option.count})
                        </label>
                    ))}
                     <label>
                        <input
                            type="radio"
                            value=""
                            checked={selectedProfessionFilter === ''}
                            onChange={() => setSelectedProfessionFilter('')}
                        /> All
                    </label>
                </div>
            </div>

            {/* Filter by Program */}
            <div className="filter-group">
                <div className="filter-section-header">
                    <h3>Filter by Program</h3>
                    <ChevronUp size={20} className="chevron-icon" />
                </div>
                <div className="filter-radio-group">
                    {programOptions.map(option => (
                        <label key={option.value}>
                            <input
                                type="radio"
                                value={option.value}
                                checked={selectedProgramFilter === option.value}
                                onChange={() => setSelectedProgramFilter(option.value)}
                            /> {option.name} ({option.count})
                        </label>
                    ))}
                    <label>
                        <input
                            type="radio"
                            value=""
                            checked={selectedProgramFilter === ''}
                            onChange={() => setSelectedProgramFilter('')}
                        /> All
                    </label>
                </div>
            </div>

            {/* Category */}
            <div className="filter-group">
                <div className="filter-section-header">
                    <h3>Category</h3>
                    <ChevronUp size={20} className="chevron-icon" />
                </div>
                <div className="filter-checkbox-group">
                    {categoryOptions.map(option => (
                        <label key={option.value}>
                            <input
                                type="checkbox"
                                value={option.value}
                                checked={selectedCategoryFilters.includes(option.value)}
                                onChange={handleCategoryChange}
                            /> {option.name} ({option.count})
                        </label>
                    ))}
                </div>
            </div>

          </div>
        </div>

        {/* Right Column: Main Dashboard Content */}
        <div className="main-content-right">

          {/* Trending Learning Opportunities */}
          <div className="section-card trending-courses-section">
            <div className="section-header">
              <div className="section-icon blue">
                <TrendingUp color="white" className="icon" />
              </div>
              <h2>Trending Learning Opportunities</h2>
            </div>
            <div className="course-grid">
                {filteredTrendingItems.length > 0 ? (
                    filteredTrendingItems.map(item => (
                        <div key={item.id} className="course-card">
                            <div className="course-header">
                                <div>
                                    <h3 className="course-title">{item.name}</h3>
                                    <div className="course-domain">{item.domain}</div>
                                </div>
                                <div className="course-type-badge">{item.type}</div>
                            </div>
                            <div className="course-description">{item.description}</div>
                            <div className="course-footer">
                                <span className="time-remaining"><Clock size={16} /> {item.duration}</span>
                                <button className="continue-btn">View Details</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-items-message" style={{ gridColumn: '1 / -1' }}>No learning opportunities found matching your filters.</p>
                )}
            </div>
          </div>

          {/* My Achieved Certifications (remains on Dashboard) */}
          <div className="section-card">
            <div className="section-header">
              <div className="section-icon yellow">
                <Award color="white" className="icon" />
              </div>
              <h2>My Achieved Certifications</h2>
            </div>
            <div className="cert-grid">
              {certifications.length > 0 ? (
                certifications.map(cert => (
                  <div key={cert.id} className="cert-card">
                    <div className="cert-header">
                      <div className="cert-content">
                        <div className="cert-icon">
                          <Award className="icon" />
                        </div>
                        <div className="cert-info">
                          <h3 className="cert-title">{cert.title}</h3>
                          <div className="cert-domain">{cert.domain}</div>
                          <div className="cert-details">
                            Issued: {formatDate(cert.issueDate)}<br />
                            ID: {cert.credentialId}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-items-message" style={{ gridColumn: '1 / -1' }}>No certifications achieved yet. Keep learning and earn your first one!</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enroll Modal Integration */}
      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
