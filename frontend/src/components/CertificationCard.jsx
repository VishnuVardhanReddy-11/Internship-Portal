import React from 'react';
import { Award } from 'lucide-react';
import '../Dashboard.css';

const CertificationCard = ({ cert, formatDate }) => {
  return (
    <div className="cert-card">
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
  );
};

export default CertificationCard;
