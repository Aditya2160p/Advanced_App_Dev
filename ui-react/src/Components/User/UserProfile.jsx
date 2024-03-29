// Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  const handleLogout = () => {
    localStorage.removeItem('userData');
    // Redirect to signup page
    window.location.href = '/signup';
  };

  return (
    <div className="min-h-screen flex justify-center bg-white">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white mt-10 mb-20 p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-black text-3xl" />
            <h2 className="text-3xl font-semibold text-center">User Dashboard</h2>
          </div>
          <div className="mb-4">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
          </div>
          <button onClick={handleLogout} className="bg-black hover:bg-gray-900 text-red-500 font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-purple-300 w-full">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
