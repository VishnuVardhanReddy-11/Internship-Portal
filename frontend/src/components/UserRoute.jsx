import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const UserRoute = ({ children }) => {
  const token = Cookies.get('token'); // user token

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default UserRoute;
