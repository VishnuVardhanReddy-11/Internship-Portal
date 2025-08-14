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
import UserRoute from './components/UserRoute';
import AdminRoute from './components/AdminRoute';
import HairCoaction from './pages/HairCoaction';
import AboutUs from './pages/AboutUs';
import InternshipDetail from './pages/InternshipDetail';
import CourseDetail from './pages/CourseDetail';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<UserRoute><Dashboard /></UserRoute>} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/admin/newCourse" element= {<AdminRoute><NewCourse /></AdminRoute>}  />
        <Route path="/admin/allCourses" element={<AdminRoute><CoursesPages /></AdminRoute>} /> {/* ✅ Fixed */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/newcourse" element={<NewCourse />} />
        <Route path="/courses" element={<CoursesPages />} />
        <Route path="/" element={<HairCoaction />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/internship/:internshipId" element={<InternshipDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
