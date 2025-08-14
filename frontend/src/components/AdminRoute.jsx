import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AdminRoute = ({ children }) => {
  const token = Cookies.get('adminToken'); // Read token from cookie

  // If no token, redirect to admin login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // If token exists, render the child component
  return children;
};

export default AdminRoute;
