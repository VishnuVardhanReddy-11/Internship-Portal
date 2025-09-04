import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SwitchFormText from '../components/SwitchFormText';

const AdminLogin = () => {
  const [adminData, setAdminData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAdminData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(adminData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // ✅ No need to store token manually
      // ✅ Cookie is stored securely
      navigate('/admin/dashboard');
    } catch (err) {
      console.error('Admin login error:', err.message);
      setError(err.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="page-center">
        <div className="container">
          <div className="left">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-heading">Hair Coaction Admin</div>

              <FormInput
                type="text"
                id="email"
                label="Email"
                value={adminData.email}
                onChange={handleChange}
              />
              <FormInput
                type="text"
                id="username"
                label="Username"
                value={adminData.username}
                onChange={handleChange}
              />
              <FormInput
                type="password"
                id="password"
                label="Password"
                value={adminData.password}
                onChange={handleChange}
              />

              {error && <div className="error-message">{error}</div>}

              <div className="input-block">
                <FormButton text="Login as Admin" />
                <SwitchFormText
                  question="Not an admin?"
                  linkText="Login as Student"
                  linkTo="/login"
                />
              </div>
            </form>
          </div>

          <div className="right">
            <div className="img">{/* Optional admin image */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
