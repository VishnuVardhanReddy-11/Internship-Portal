import React from 'react';
import './App.css';
import FormInput from './components/FormInput';
import FormButton from './components/FormButton';
import SwitchFormText from './components/SwitchFormText';

const AdminLogin = () => {
  return (
    <div className="auth-wrapper">
      <div className="page-center">
        <div className="container">
          <div className="left">
            <form className="form">
              <div className="form-heading">Hair Coaction Admin</div>

              <FormInput type="text" id="adminEmail" label="Admin Username" />
              <FormInput type="password" id="adminPass" label="Password" />

              <div className="input-block">
                <FormButton text="Login as Admin" />
                <span className="forgot">
                  <a href="/admin/forgot-password">Forgot Password?</a>
                </span>
                {/* Optional: Switch to student login */}
                <SwitchFormText
                  question="Not an admin?"
                  linkText="Login as Student"
                  linkTo="/"
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
