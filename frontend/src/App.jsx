import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';
import OtpVerification from './OtpVerification';
import AdminLogin from './AdminLogin'; // ✅ Import admin login

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/admin/login" element={<AdminLogin />} /> {/* ✅ Admin login route */}
      </Routes>
    </Router>
  );
}

export default App;
