import React from 'react';
import { User } from 'lucide-react';
import '../Dashboard.css';

const Header = () => {
  return (
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
      <div className="member-info">
        <div className="label">Member Since</div>
        <div className="value">2024</div>
        <div className="subtitle">Premium Account</div>
      </div>
    </div>
  );
};

export default Header;
