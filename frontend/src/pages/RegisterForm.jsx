import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setAuthData, setError } from '../store/authSlice';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SwitchFormText from '../components/SwitchFormText';
import '../App.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector((state) => state.auth);

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading());

    try {
      const res = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("backend se aaya: ", data);

      if (res.ok) {
        alert('Registration successful!');

        // Store in localStorage
        localStorage.setItem("userData", JSON.stringify(formData));
        localStorage.setItem("mode", "register");
        localStorage.setItem("sessionId", data.sessionId);

        // Store in Redux
        dispatch(setAuthData({
          user: formData,
          message: data.message || 'Registered successfully',
        }));

        // Navigate to OTP
        setTimeout(() => {
          navigate('/otp');
        }, 2000);

        // Reset form
        setFormData({
          username: '',
          email: '',
          phone: '',
          password: ''
        });
      } else {
        dispatch(setError(data.message || 'Registration failed'));
      }
    } catch (error) {
      console.error('Error:', error);
      dispatch(setError('Something went wrong!'));
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="page-center">
        <div className="container">
          <div className="left">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-heading">Register</div>

              {/* Centered Success/Error Messages */}
              {message && <p className="form-message success">{message}</p>}
              {error && <p className="form-message error">{error}</p>}

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
                <FormButton text={loading ? 'Registering...' : 'Register'} />
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
