import React from 'react';
import { Link } from 'react-router-dom';

const SwitchFormText = ({ question, linkText, linkTo }) => {
  return (
    <span className="forgot">
      <span className="vis">{question}</span>
      <Link to={linkTo}>{linkText}</Link>
    </span>
  );
};

export default SwitchFormText;
