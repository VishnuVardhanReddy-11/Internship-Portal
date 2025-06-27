// src/CoursesPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, Layers, CheckCircle, Clock, GraduationCap, Code, Target,
  BarChart, PlusCircle, PlayCircle, Notebook, ClipboardList, Hourglass, Award
} from 'lucide-react';
import '../styles/CoursesPages.css';
import EnrollModal from '../components/EnrollModal'; // Make sure the path is correct

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

const CoursesPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [enrolledItems] = useState([
    {
      id: 1,
      title: 'React Fundamentals',
      domain: 'Web Development',
      progress: 75,
      totalUnits: 12,
      completedUnits: 9,
      enrolledDate: '2024-11-15',
      status: 'In Progress',
      type: 'course'
    },
    {
      id: 2,
      title: 'Python for AI',
      domain: 'Artificial Intelligence',
      progress: 100,
      totalUnits: 16,
      completedUnits: 16,
      enrolledDate: '2024-10-01',
      status: 'Completed',
      type: 'course'
    },
    {
      id: 3,
      title: 'Docker Essentials',
      domain: 'DevOps',
      progress: 45,
      totalUnits: 10,
      completedUnits: 5,
      enrolledDate: '2024-12-01',
      status: 'In Progress',
      type: 'course'
    },
    {
      id: 4,
      title: 'Machine Learning Project',
      domain: 'Artificial Intelligence',
      progress: 80,
      totalUnits: 10,
      completedUnits: 8,
      enrolledDate: '2024-10-25',
      status: 'In Progress',
      type: 'project'
    },
    {
      id: 5,
      title: 'Cloud Security Capstone',
      domain: 'Cybersecurity',
      progress: 10,
      totalUnits: 7,
      completedUnits: 1,
      enrolledDate: '2025-01-10',
      status: 'Enrolled',
      type: 'project'
    },
    {
      id: 6,
      title: 'E-commerce Website Build',
      domain: 'Web Development',
      progress: 20,
      totalUnits: 8,
      completedUnits: 2,
      enrolledDate: '2025-01-20',
      status: 'In Progress',
      type: 'project'
    },
    {
      id: 7,
      title: 'Data Structures & Algorithms',
      domain: 'Computer Science',
      progress: 60,
      totalUnits: 15,
      completedUnits: 9,
      enrolledDate: '2024-09-01',
      status: 'In Progress',
      type: 'course'
    },
    {
      id: 8,
      title: 'Database Management Basics',
      domain: 'Data Science',
      progress: 90,
      totalUnits: 8,
      completedUnits: 7,
      enrolledDate: '2024-08-10',
      status: 'In Progress',
      type: 'course'
    },
  ]);

  const snapshotData = [
    {
      id: 1,
      title: 'Courses In Progress',
      value: enrolledItems.filter(item => item.type === 'course' && item.status === 'In Progress').length,
      icon: <PlayCircle size={24} color="white" />,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Projects In Progress',
      value: enrolledItems.filter(item => item.type === 'project' && item.status === 'In Progress').length,
      icon: <Code size={24} color="white" />,
      color: 'orange'
    },
    {
      id: 3,
      title: 'Total Enrolled Courses',
      value: enrolledItems.filter(item => item.type === 'course').length,
      icon: <Notebook size={24} color="white" />,
      color: 'purple'
    },
    {
      id: 4,
      title: 'Total Enrolled Projects',
      value: enrolledItems.filter(item => item.type === 'project').length,
      icon: <ClipboardList size={24} color="white" />,
      color: 'teal'
    },
    {
      id: 5,
      title: 'Completed Items',
      value: enrolledItems.filter(item => item.status === 'Completed').length,
      icon: <CheckCircle size={24} color="white" />,
      color: 'green'
    },
    {
      id: 6,
      title: 'Total Units Completed',
      value: enrolledItems.reduce((acc, item) => acc + item.completedUnits, 0),
      icon: <Award size={24} color="white" />,
      color: 'yellow'
    },
  ];

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  const handleEnrollType = (type) => {
    setIsModalOpen(false);
    if (type === 'course') {
      navigate('/enroll/course');
    } else if (type === 'project') {
      navigate('/enroll/project');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-left">
          <div className="section-icon blue">
            <Layers color="white" className="icon-large" />
          </div>
          <div className="welcome-text">
            <h1>My Learning Hub</h1>
            <p>Your comprehensive overview of courses and projects</p>
          </div>
        </div>
        <div className="header-right-buttons">
          <button className="enroll-new-btn back-to-dashboard" onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </button>
          <button className="enroll-new-btn" onClick={handleEnrollClick}>
            <PlusCircle size={20} /> Enroll Now
          </button>
        </div>
      </div>

      <div className="main-grid">
        <div className="sidebar-left">
          <div className="section-card my-learning-overview-section">
            <div className="section-header">
              <div className="section-icon green">
                <BarChart color="white" className="icon" />
              </div>
              <h2>My Learning Snapshot</h2>
            </div>
            <div className="learning-overview-stats">
              {snapshotData.map(stat => (
                <div key={stat.id} className="overview-stat-card">
                  <div className={`stat-icon-wrapper ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <h4>{stat.title}</h4>
                  <span>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="main-content-right">
          <div className="section-card">
            <div className="section-header">
              <div className="section-icon blue">
                <BookOpen color="white" className="icon" />
              </div>
              <h2>My Courses & Projects</h2>
            </div>
            <div className="my-courses-list">
              {enrolledItems.length > 0 ? (
                enrolledItems.map(item => (
                  <div key={item.id} className="enrolled-course-card">
                    <div className="enrolled-course-header">
                      <div>
                        <h3 className="enrolled-course-title">{item.title}</h3>
                        <div className="enrolled-course-domain">{item.domain}</div>
                      </div>
                      <span className={`enrolled-course-status-badge status-${getStatusClass(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="enrolled-course-progress-bar">
                      <div
                        className={`enrolled-course-progress-fill progress-${getProgressColor(item.progress)}`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <div className="enrolled-course-details">
                      <div>
                        Progress: {item.progress}% ({item.completedUnits}/{item.totalUnits} {item.type === 'course' ? 'lessons' : 'milestones'})
                      </div>
                      <button className="continue-btn">
                        {item.status === 'Completed' ? 'View Certificate' : 'Continue Learning'}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-items-message">
                  You haven't enrolled in any courses or projects yet. Enroll in new learning opportunities from the Dashboard!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <EnrollModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEnroll={handleEnrollType}
      />
    </div>
  );
};

export default CoursesPage;
