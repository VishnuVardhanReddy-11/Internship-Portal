import React, { useState, useEffect } from 'react';
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
  const [enrolledItems, setEnrolledItems] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:3000/admin/get-all-courses', {
        method: 'GET',
        credentials: 'include', // important for sending cookies
      });
      

        const data = await res.json();
        setEnrolledItems(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const snapshotData = [
    {
      id: 1,
      title: 'Total Courses',
      value: enrolledItems.length,
      icon: <Notebook size={24} color="white" />,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Beginner Courses',
      value: enrolledItems.filter(c => c.level === 'Beginner').length,
      icon: <GraduationCap size={24} color="white" />,
      color: 'green'
    },
    {
      id: 3,
      title: 'Intermediate Courses',
      value: enrolledItems.filter(c => c.level === 'Intermediate').length,
      icon: <Hourglass size={24} color="white" />,
      color: 'yellow'
    },
    {
      id: 4,
      title: 'Advanced Courses',
      value: enrolledItems.filter(c => c.level === 'Advanced').length,
      icon: <Target size={24} color="white" />,
      color: 'red'
    }
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
            <h1>All Courses</h1>
            <p>Browse all available courses from the system</p>
          </div>
        </div>
        <div className="header-right-buttons">
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
              <h2>Course Snapshot</h2>
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
              <h2>Available Courses</h2>
            </div>
            <div className="my-courses-list">
              {enrolledItems.length > 0 ? (
                enrolledItems.map(item => (
                  <div key={item._id} className="enrolled-course-card">
                    <div className="enrolled-course-header">
                      <div>
                        <h3 className="enrolled-course-title">{item.title}</h3>
                        <div className="enrolled-course-domain">Instructor: {item.instructor}</div>
                      </div>
                      <span className="enrolled-course-status-badge">
                        {item.level}
                      </span>
                    </div>
                    <p>{item.description}</p>
                    <div className="enrolled-course-details">
                      <div>
                        Duration: {item.duration} | From {new Date(item.startDate).toLocaleDateString()} to {new Date(item.endDate).toLocaleDateString()}
                      </div>
                      <button className="continue-btn" onClick={() => navigate(`/course/${item._id}`)}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-items-message">
                  No courses found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEnroll={handleEnrollType}
      />
    </div>
  );
};

export default CoursesPage;