import React, { useState } from 'react';
import {
  User, BookOpen, Award, TrendingUp, Clock , ClipboardList
} from 'lucide-react';
import './Dashboard.css';

import {
  formatDate,
  getProgressColor,
  getStatusClass,
  getRandomTimeRemaining
} from './utils/dashboardUtils';

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      id: 1,
      title: 'React Fundamentals',
      domain: 'Web Development',
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      enrolledDate: '2024-11-15',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Python for AI',
      domain: 'Artificial Intelligence',
      progress: 100,
      totalLessons: 16,
      completedLessons: 16,
      enrolledDate: '2024-10-01',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Docker Essentials',
      domain: 'DevOps',
      progress: 45,
      totalLessons: 10,
      completedLessons: 5,
      enrolledDate: '2024-12-01',
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      domain: 'Web Development',
      progress: 60,
      totalLessons: 14,
      completedLessons: 8,
      enrolledDate: '2024-11-20',
      status: 'In Progress'
    },
    {
      id: 5,
      title: 'Machine Learning Basics',
      domain: 'Artificial Intelligence',
      progress: 30,
      totalLessons: 20,
      completedLessons: 6,
      enrolledDate: '2024-12-10',
      status: 'In Progress'
    }
  ]);

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
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      issueDate: '2024-08-10',
      credentialId: 'AWS-2024-003',
      domain: 'DevOps'
    }
  ]);

  const domains = {
    'Web Development': [
      { id: 1, name: 'E-commerce Website', description: 'Build a complete online store with React and Node.js', duration: '8 weeks' },
      { id: 2, name: 'Portfolio Website', description: 'Create a responsive personal portfolio', duration: '4 weeks' },
      { id: 3, name: 'Blog Platform', description: 'Develop a full-featured blogging platform', duration: '6 weeks' }
    ],
    'Application Development': [
      { id: 4, name: 'Mobile Banking App', description: 'Build a secure mobile banking application', duration: '10 weeks' },
      { id: 5, name: 'Social Media App', description: 'Create a social networking mobile app', duration: '12 weeks' },
      { id: 6, name: 'Task Management App', description: 'Develop a productivity and task management app', duration: '6 weeks' }
    ],
    'Artificial Intelligence (AI)': [
      { id: 7, name: 'Chatbot Development', description: 'Build an intelligent chatbot using NLP', duration: '8 weeks' },
      { id: 8, name: 'Image Recognition System', description: 'Develop computer vision applications', duration: '10 weeks' },
      { id: 9, name: 'Recommendation Engine', description: 'Create ML-powered recommendation systems', duration: '9 weeks' }
    ],
    'DevOps': [
      { id: 10, name: 'CI/CD Pipeline', description: 'Build automated deployment pipelines', duration: '7 weeks' },
      { id: 11, name: 'Container Orchestration', description: 'Master Kubernetes and Docker', duration: '9 weeks' },
      { id: 12, name: 'Infrastructure as Code', description: 'Implement IaC with Terraform and AWS', duration: '8 weeks' }
    ]
  };

  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDomainChange = (e) => {
    setSelectedDomain(e.target.value);
    setSelectedProject(null);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleEnroll = () => {
    if (selectedProject) {
      alert(`You have enrolled in: ${selectedProject.name}`);
      setEnrolledCourses(prev => [
        ...prev,
        {
          id: prev.length + 1,
          title: selectedProject.name,
          domain: selectedDomain,
          progress: 0,
          totalLessons: 10,
          completedLessons: 0,
          enrolledDate: new Date().toISOString(),
          status: 'Enrolled'
        }
      ]);
      setSelectedDomain('');
      setSelectedProject(null);
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
            <h1>Welcome back, Alex!</h1>
            <p>Continue your learning journey</p>
          </div>
        </div>
        <button className="logout-btn-animated" onClick={() => alert('Logged out')}>
  <div className="logout-sign">
    <svg viewBox="0 0 512 512">
      <path
        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
      ></path>
    </svg>
  </div>
  <div className="logout-text">Logout</div>
</button>

      </div>

      {/* Stats */}
      <div className="stats-grid">
        {/* Active Courses */}
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon blue">
              <BookOpen color="white" className="icon" />
            </div>
            <div className="stat-number">{enrolledCourses.filter(c => c.status !== 'Enrolled').length}</div>
          </div>
          <div className="stat-label-small">Active Courses</div>
          <p className="stat-title">Courses Enrolled</p>
          <p className="stat-subtitle">Currently active</p>
        </div>
        {/* Learning Time */}
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon purple">
              <ClipboardList color="white" className="icon" />
            </div>
            <div className="stat-number">1</div>
          </div>
          <div className="stat-label-small">Active Projects</div>
          <p className="stat-title">Projects Enrolled</p>
          <p className="stat-subtitle">Currently active</p>
        </div>
        {/* Certifications */}
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon yellow">
              <Award color="white" className="icon" />
            </div>
            <div className="stat-number">{certifications.length}</div>
          </div>
          <div className="stat-label-small">Certifications</div>
          <p className="stat-title">Certifications</p>
          <p className="stat-subtitle">Completed successfully</p>
        </div>

        {/* Performance */}
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon green">
              <TrendingUp color="white" className="icon" />
            </div>
            <div className="stat-number">85%</div>
          </div>
          <div className="stat-label-small">Average Score</div>
          <p className="stat-title">Performance</p>
          <p className="stat-subtitle">Overall progress</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="main-grid">
        <div>
          {/* Enrolled Courses */}
          <div className="section-card">
            <div className="section-header">
              <div className="section-icon blue">
                <BookOpen color="white" className="icon" />
              </div>
              Enrolled Courses
            </div>
            <div className="course-grid">
              {enrolledCourses.filter(c => c.status !== 'Enrolled').map(course => (
                <div key={course.id} className="course-card">
                  <div className="course-header">
                    <div>
                      <h3 className="course-title">{course.title}</h3>
                      <div className="course-domain">{course.domain}</div>
                      <div className="course-date">Enrolled on {formatDate(course.enrolledDate)}</div>
                    </div>
                    <div className={`status-badge ${getStatusClass(course.status)}`}>{course.status}</div>
                  </div>
                  <div className="progress-section">
                    <div className="progress-info">
                      <span>{course.completedLessons}/{course.totalLessons} Lessons</span>
                      <span className="progress-percent">{course.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className={`progress-fill ${getProgressColor(course.progress)}`} style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="time-remaining">{getRandomTimeRemaining()}</span>
                    <button className="continue-btn">Continue</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enrolled Projects */}
          <div className="section-card">
            <div className="section-header">
              <div className="section-icon green">
                <BookOpen color="white" className="icon" />
              </div>
              Enrolled Projects
            </div>
            <div className="course-grid">
              {enrolledCourses.filter(p => p.status === 'Enrolled').map(project => (
                <div key={project.id} className="course-card">
                  <div className="course-header">
                    <div>
                      <h3 className="course-title">{project.title}</h3>
                      <div className="course-domain">{project.domain}</div>
                      <div className="course-date">Enrolled on {formatDate(project.enrolledDate)}</div>
                    </div>
                    <div className={`status-badge ${getStatusClass(project.status)}`}>{project.status}</div>
                  </div>
                  <div className="progress-section">
                    <div className="progress-info">
                      <span>{project.completedLessons}/{project.totalLessons} Lessons</span>
                      <span className="progress-percent">{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className={`progress-fill ${getProgressColor(project.progress)}`} style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="time-remaining">{getRandomTimeRemaining()}</span>
                    <button className="continue-btn">Continue</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="section-card">
            <div className="section-header">
              <div className="section-icon yellow">
                <Award color="white" className="icon" />
              </div>
              Achieved Certifications
            </div>
            <div className="course-grid">
              {certifications.map(cert => (
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
              ))}
            </div>
          </div>
        </div>

        {/* Enrollment Form */}
        <div>
          <div className="section-card enrollment-section">
            <div className="section-header">
              <div className="section-icon green">
                <BookOpen color="white" className="icon" />
              </div>
              Enroll in New Project
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="domain-select">Select Domain</label>
              <select
                id="domain-select"
                className="form-select"
                value={selectedDomain}
                onChange={handleDomainChange}
              >
                <option value="">Choose a domain...</option>
                {Object.keys(domains).map(domain => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>

            {selectedDomain && (
              <div className="form-group" id="project-selection">
                <label className="form-label">Select Project</label>
                <div className="project-list">
                  {domains[selectedDomain].map(project => (
                    <div
                      key={project.id}
                      className={`project-option ${selectedProject?.id === project.id ? 'selected' : ''}`}
                      onClick={() => handleProjectSelect(project)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="project-content">
                        <div className="project-info">
                          <h4 className="project-name">{project.name}</h4>
                          <div className="project-description">{project.description}</div>
                          <div className="project-duration">Duration: {project.duration}</div>
                        </div>
                        <div className={`radio-button ${selectedProject?.id === project.id ? 'selected' : ''}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              id="enroll-btn"
              className={`enroll-btn ${selectedDomain && selectedProject ? 'enabled' : 'disabled'}`}
              disabled={!(selectedDomain && selectedProject)}
              onClick={handleEnroll}
            >
              {selectedDomain && selectedProject ? 'Enroll Now' : 'Select Domain & Project to Enroll'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
