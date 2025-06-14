import React from 'react';
import '../Dashboard.css';

const CourseCard = ({ course, formatDate, getProgressColor, getStatusClass, getRandomTimeRemaining }) => {
  return (
    <div className="course-card">
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
          <div
            className={`progress-fill ${getProgressColor(course.progress)}`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <div className="course-footer">
        <span className="time-remaining">{getRandomTimeRemaining()}</span>
        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
};

export default CourseCard;
