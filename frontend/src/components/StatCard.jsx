import React from 'react';
import '../Dashboard.css';

const StatCard = ({ icon, color, number, smallLabel, title, subtitle }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className={`stat-icon ${color}`}>
          {icon}
        </div>
        <div className="stat-number">{number}</div>
      </div>
      <div className="stat-label-small">{smallLabel}</div>
      <p className="stat-title">{title}</p>
      <p className="stat-subtitle">{subtitle}</p>
    </div>
  );
};

export default StatCard;
