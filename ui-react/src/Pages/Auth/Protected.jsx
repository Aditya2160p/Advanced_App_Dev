import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Mock authentication function (replace with actual implementation)
const isAuthenticated = () => {
  // Check if user is authenticated (e.g., by verifying token, session, etc.)
  return localStorage.getItem('isLoggedIn') === 'true'; // Check if user is logged in
};

// ProtectedRoute component to wrap authenticated routes
const Protected = ({ element, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace /> // Redirect to login page if not authenticated
  );
};

export default Protected;
