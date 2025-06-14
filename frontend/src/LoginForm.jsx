import React from 'react';
import './App.css';
import FormInput from './components/FormInput';
import FormButton from './components/FormButton';
import SwitchFormText from './components/SwitchFormText';

const LoginForm = () => {
  return (
    <div className="auth-wrapper">
      <div className="page-center">
        <div className="container">
          <div className="left">
            <form className="form">
              <div className="form-heading">Hair Coaction</div>

              <FormInput type="text" id="email" label="Username" />
              <FormInput type="password" id="pass" label="Password" />

              <div className="input-block">
                <FormButton text="Submit"  />
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