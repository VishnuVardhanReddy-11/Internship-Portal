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
      console.log(data);
      

      if (res.ok) {
        alert('Registration successful!');
        navigate('/otp');
        // Optionally reset form or redirect
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


/*// src/RegisterForm.js
import React from 'react';
import FormInput from './components/FormInput';
import FormButton from './components/FormButton';
import SwitchFormText from './components/SwitchFormText';

const RegisterForm = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-[rgba(182,231,255,0.422)]">
        <div className="flex w-[520px] h-[500px] max-w-[99%] items-center justify-center relative overflow-hidden bg-[rgba(255,255,255,0.145)] rounded-[15px] shadow-[0_0_30px_rgba(0,0,0,0.03)] border border-[rgba(128,128,128,0.178)]">
          <div className="w-[66%] h-full">
            <form className="flex flex-col justify-center h-full w-full relative backdrop-blur-[20px]">
              <div className="text-center text-3xl font-bold text-[#2c3e50] mb-[25px] p-[15px] bg-[rgba(255,255,255,0.9)] rounded-xl backdrop-blur-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] tracking-wider text-shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-[rgba(255,255,255,0.3)]">Register</div>

              <FormInput type="text" id="username" label="Username" />
              <FormInput type="email" id="email" label="Email" />
              <FormInput type="password" id="password" label="Password" />

              <div className="relative">
                <FormButton text="Register" />
                <SwitchFormText
                  question="Already have an account?"
                  linkText="Login here"
                  linkTo="/"
                />
              </div>
            </form>
          </div>

          <div className="w-[34%] h-full relative after:content-[''] after:absolute after:w-[80%] after:h-[80%] after:right-[-40%] after:bg-[radial-gradient(circle,rgba(157,173,203,1)_61%,rgba(99,122,159,1)_100%)] after:rounded-full after:-z-[1]">
            <div className="w-full h-full">{/* Optional image *//*}</div>
          </div>
        </div>
      </div>
  );
};

export default RegisterForm; */