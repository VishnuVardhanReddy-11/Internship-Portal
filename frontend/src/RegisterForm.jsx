// src/RegisterForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './components/FormInput';
import FormButton from './components/FormButton';
import SwitchFormText from './components/SwitchFormText';
import './App.css';

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

 const handleChange = (e) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.id]: e.target.value
  }));
  // console.log('Updated Form Data:', { ...formData, [e.target.id]: e.target.value }); // Debug
};

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Form Data:', formData);

  try {
    const res = await fetch('http://localhost:3000/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    console.log("backend se aaya: ",data);

    if (res.ok) {
      alert('Registration successful!');

      // ✅ Store user data and mode in localStorage
      localStorage.setItem("userData", JSON.stringify(formData));
      localStorage.setItem("mode", "register");
      localStorage.setItem("sessionId", data.sessionId);

      navigate('/otp');

      // Optionally reset the form
      setFormData({
        username: '',
        email: '',
        phone: '',
        password: ''
      });
    } else {
      alert(data.message || 'Registration failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong!');
  }
};

  return (
    <div className="auth-wrapper">
      <div className="page-center">
        <div className="container">
          <div className="left">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-heading">Register</div>

              <FormInput
                type="text"
                id="username"
                label="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <FormInput
                type="email"
                id="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <FormInput
                type="tel"
                id="phone"
                label="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <FormInput
                type="password"
                id="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <div className="input-block">
                <FormButton text="Register" />
                <SwitchFormText
                  question="Already have an account?"
                  linkText="Login here"
                  linkTo="/"
                />
              </div>
            </form>
          </div>

          <div className="right">
            <div className="img">{/* Optional image */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;


