import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Dashboard from './pages/Dashboard';
import OtpVerification from './pages/OtpVerification';
import AdminDashboard from './pages/adminDashboard';
import AdminLogin from './pages/AdminLogin';
import CoursesPages from './pages/CoursesPages'; 
import NewCourse from './pages/NewCourse';
import HairCoaction from './pages/HairCoaction';
import AboutUs from './pages/AboutUs';
import FullStackInternship from './pages/Internship/FullStackInternship';
import ArtificialIntelligenceInternship from './pages/Internship/ArtificialIntelligenceInternship';
import ApplicationDevInternship from './pages/Internship/ApplicationDevInternship';
import DevOpsInternship from './pages/Internship/DevOpsInternship';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/newcourse" element={<NewCourse />} />
        <Route path="/courses" element={<CoursesPages />} />
        <Route path="/" element={<HairCoaction />} />;
        <Route path="/about" element={<AboutUs />} />
        <Route path="/web" element={<FullStackInternship />} />
        <Route path="/ai" element={<ArtificialIntelligenceInternship />} />
        <Route path="/applicationdev" element={<ApplicationDevInternship />} />
        <Route path="/devops" element={<DevOpsInternship />} />
      </Routes>
    </Router>
  );
}

export default App;
