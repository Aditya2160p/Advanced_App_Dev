import React from 'react';
import { NavLink } from 'react-router-dom';
import imglogo from '../../assets/images/logo.png';

const AdminNavbar = () => {
  const handleLogout = () => {
    // Perform logout actions here, such as clearing user data from localStorage
    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <nav className="w-full bg-white-500 h-15 shadow-sm shadow-black sticky">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center py-3 md:py-5 md:block">
            <img src={imglogo} className="w-70 h-7" alt="Logo" />
          </div>
        </div>
        <div className="hidden md:inline-block">
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-gray-700 rounded-md shadow hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
