import React from 'react';
import { BookOpen } from 'lucide-react';
import '../Dashboard.css';

const EnrollmentForm = ({
  domains,
  selectedDomain,
  selectedProject,
  handleDomainChange,
  handleProjectSelect,
  handleEnroll
}) => {
  return (
    <div className="section-card enrollment-section">
      <div className="section-header">
        <div className="section-icon green">
          <BookOpen color="white" className="icon" />
        </div>
        Enroll in New Project
      </div>

      {/* Domain Dropdown */}
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

      {/* Project Selection */}
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

      {/* Enroll Button */}
      <button
        id="enroll-btn"
        className={`enroll-btn ${selectedDomain && selectedProject ? 'enabled' : 'disabled'}`}
        disabled={!(selectedDomain && selectedProject)}
        onClick={handleEnroll}
      >
        {selectedDomain && selectedProject ? 'Enroll Now' : 'Select Domain & Project to Enroll'}
      </button>
    </div>
  );
};

export default EnrollmentForm;
