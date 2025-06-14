import React from 'react';

const FormInput = ({ type, id, label, value, onChange }) => {
  return (
    <div className="input-block">
      <input
        className="input"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormInput;