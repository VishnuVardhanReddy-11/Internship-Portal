import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Dashboard from './pages/Dashboard';
import OtpVerification from './pages/OtpVerification';
import AdminDashboard from './pages/adminDashboard'; // Consider fixing casing
import AdminLogin from './pages/AdminLogin';
import CoursesPages from './pages/CoursesPages'; // ✅ Using this now

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/courses" element={<CoursesPages />} /> {/* ✅ Fixed */}
      </Routes>
    </Router>
  );
}

export default App;
