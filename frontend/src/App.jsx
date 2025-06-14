import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';
import OtpVerification from './OtpVerification';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/otp" element={<OtpVerification />} />
      </Routes>
    </Router>
  );
}

export default App;