import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import FormInput from './components/FormInput';
import FormButton from './components/FormButton';
import SwitchFormText from './components/SwitchFormText';
import { setAuthData, setError, setLoading } from './store/authSlice';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, message, isAuthenticated } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading());

    try {
      const res = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log('result:', result);

      if (res.ok) {
        // Filter out sensitive data (e.g., password) from user object
        const { ...userData } = result.user || {};
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("mode", "login");
        localStorage.setItem("sessionId", result.sessionId);
        // Store user, token, and message in Redux
        dispatch(
          setAuthData({
            user: userData,
            token: result.token,
            message: result.message,
          })
        );
     
        // Navigate to OTP page with sessionId in state
       setTimeout(() => {
        navigate('/otp');
       }, 2000);

        // alert('Login successful');
      } else {
        dispatch(setError(result.message || 'Login failed'));
        // alert(result.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      dispatch(setError('Something went wrong'));
      // alert('Something went wrong');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="page-center">
        <div className="container">
          <div className="left">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-heading">Hair Coaction</div>

              {message && <p className='text-center' style={{ color: 'green' }}>{message}</p>}
              {error && <p className='text-center' style={{ color: 'red' }}>{error}</p>}

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
                <FormButton text={loading ? 'Submitting...' : 'Submit'} disabled={loading} />
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