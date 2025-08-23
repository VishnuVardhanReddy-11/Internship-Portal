// src/UserDashboard.js
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User, BookOpen, Award, TrendingUp, Clock, Filter, PlusCircle, ChevronUp, Layers
} from 'lucide-react';
import '../styles/Dashboard.css';
import EnrollModal from '../components/EnrollModal';
import Footer from '../components/Footer';
import {Link } from 'react-router-dom';
// --- Utility Functions ---
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

// const getProgressColor = (progress) => {
//     if (progress < 25) return 'red';
//     if (progress < 50) return 'orange';
//     if (progress < 75) return 'yellow';
//     if (progress < 100) return 'blue';
//     return 'green';
// };

// const getStatusClass = (status) => {
//     const statusMap = {
//         'In Progress': 'in-progress',
//         'Completed': 'completed',
//         'Enrolled': 'enrolled',
//         'Dropped': 'dropped'
//     };
//     return statusMap[status] || '';
// };
// --- End of Utility Functions ---

// Filter options (you can keep or remove counts depending on your DB)
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

const UserDashboard = () => {
  const navigate = useNavigate();

  // Modal
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  // Certifications
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

  // Filters
  const [selectedProfessionFilter, setSelectedProfessionFilter] = useState('');
  const [selectedProgramFilter, setSelectedProgramFilter] = useState('');
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState([]);

  // State for courses (fetched from backend)
  const [courses, setCourses] = useState([]);
  const [filteredTrendingItems, setFilteredTrendingItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch courses from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/user/courses', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();
        console.log('response:', data);
        
        setCourses(data); // Expecting backend to return an array of courses
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError('Failed to load courses. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Memoize courses for filtering
  const allTrendingLearningOpportunities = useMemo(() => courses, [courses]);

  // Effect: Apply filters
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
              item.categories?.some(cat => selectedCategoryFilters.includes(cat))
          );
      }

      setFilteredTrendingItems(filtered);

  }, [selectedProfessionFilter, selectedProgramFilter, selectedCategoryFilters, allTrendingLearningOpportunities]);

  // Category handler
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategoryFilters(prev =>
      checked ? [...prev, value] : prev.filter(cat => cat !== value)
    );
  };

  // Open modal
  const handleEnrollNewClick = () => {
    setIsEnrollModalOpen(true);
  };

  // --- Logout Function ---
const handleLogout = async () => {
  try {
    const response = await fetch('http://localhost:3000/user/logout', {
      method: 'POST',   // 👈 use POST instead of GET for logout
      credentials: 'include',
    });

    if (response.ok) {
      alert('Logged out successfully');
      navigate('/');
    } else {
      const errorData = await response.json();
      alert(errorData.message || 'Logout failed');
    }
  } catch (error) {
    console.error("Logout failed:", error);
    alert('Logout failed. Try again.');
  }
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
            <button
                className="enroll-new-btn"
                onClick={() => navigate('/courses')}
                style={{ backgroundColor: 'var(--accent-green)' }}
            >
                <Layers size={20} /> My Courses
            </button>
            <button className="Btn" onClick={handleLogout}>
                    <div className="sign">
                      <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                      </svg>
                    </div>
                    <div className="text">Logout</div>
            </button>

        </div>
      </div>

      {/* Main Grid */}
      <div className="main-grid">

        {/* Left: Filters */}
        <div className="sidebar-left filter-sidebar">
          <div className="section-card filter-card">
            <div className="section-header">
              <div className="section-icon gray">
                <Filter color="white" className="icon" />
              </div>
              <h2>Filters</h2>
            </div>

            {/* Profession */}
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

            {/* Program */}
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

        {/* Right: Courses + Certifications */}
        <div className="main-content-right">

          {/* Courses Section */}
          <div className="section-card trending-courses-section">
            <div className="section-header">
              <div className="section-icon blue">
                <TrendingUp color="white" className="icon" />
              </div>
              <h2>Trending Learning Opportunities</h2>
            </div>
            <div className="course-grid">
                {loading ? (
                  <p>Loading courses...</p>
                ) : error ? (
                  <p className="error-message">{error}</p>
                ) : filteredTrendingItems.length > 0 ? (
                    filteredTrendingItems.map(item => (
                       <div key={item._id} className="course-card">
                              <div className="course-header">
                                <div>
                                  <h3 className="course-title">{item.title}</h3>
                                  <div className="course-domain">Instructor: {item.instructor}</div>
                                </div>
                                <div className="course-type-badge">{item.level}</div>
                              </div>
                              <div className="course-description">{item.description}</div>
                              <div className="course-footer">
                                <span className="time-remaining">
                                    <Clock size={16} /> {item.duration}
                                </span>
                                <Link
                          to={`/user/course/${courses._id}`}
                          className="inline-block px-5 py-2.5 rounded-md font-semibold text-sm bg-[#6C5CE7] text-white border-2 border-[#6C5CE7] hover:bg-[#5B4DC0] hover:border-[#5B4DC0] transition-all text-center"
                        >
                          View Course
                        </Link>
                              </div>
                        </div>

                    ))
                ) : (
                    <p className="no-items-message" style={{ gridColumn: '1 / -1' }}>
                      No learning opportunities found matching your filters.
                    </p>
                )}
            </div>
          </div>

          {/* Certifications */}
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
                <p className="no-items-message" style={{ gridColumn: '1 / -1' }}>
                  No certifications achieved yet. Keep learning and earn your first one!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enroll Modal */}
      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
      />
      <Footer />
    </div>
    
  );
};

export default UserDashboard;
