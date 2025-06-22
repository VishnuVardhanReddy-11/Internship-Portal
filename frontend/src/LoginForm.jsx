import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import FormInput from './components/FormInput';
import FormButton from './components/FormButton';
import SwitchFormText from './components/SwitchFormText';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    console.log("result:", result);
    

    if (res.ok) {
      // ✅ Store user and mode in localStorage
      localStorage.setItem('userData', JSON.stringify({ ...formData, ...result.user })); // ✅ keeps plain password
      localStorage.setItem('mode', 'login');
      localStorage.setItem('sessionId', result.sessionId);
      

      alert('Login successful');
      navigate('/otp'); // or your desired route
    } else {
      alert(result.message || 'Login failed');
    }
  }
   catch (err) {
    console.error('Login error:', err);
    alert('Something went wrong');
  }
};

  return (
    <div className="auth-wrapper">
      <div className="page-center">
        <div className="container">
          <div className="left">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-heading">Hair Coaction</div>

              <FormInput
                type="text"
                id="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <FormInput
                type="text"
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
                <FormButton text="Submit" />
                <span className="forgot">
                  <a href="/forgot-password">Forgot Password?</a>
                </span>
                <SwitchFormText
                  question="Don't have an account?"
                  linkText="Register"
                  linkTo="/register"
                />
              </div>
            </form>
          </div>

          <div className="right">
            <div className="img">{/* Image */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
