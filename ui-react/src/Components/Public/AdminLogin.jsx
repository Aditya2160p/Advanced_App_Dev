import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const AdminLogin = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Check if the entered credentials match the default admin credentials
    if (formData.email === 'admin@gmail.com' && formData.password === 'admin') {
      // Perform login actions here, such as setting authentication state
      onLogin();
      // Redirect to admin dashboard
      window.location.href = '/admin/dashboard';
    } else {
      // Display error message for invalid credentials
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white mt-10 mb-20 p-8 rounded-lg shadow-lg max-w-md w-full">
          <form onSubmit={handleLoginSubmit} className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">Admin Login</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email
              </label>
              <input type="email" id="email" name="email" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                <FontAwesomeIcon icon={faLock} className="mr-2" />
                Password
              </label>
              <input type="password" id="password" name="password" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="flex justify-center">
              {/* <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-purple-300 w-full">Login</button> */}
              <NavLink to="/admin/dashboard" className="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-purple-300">
                Login
              </NavLink>
            </div>
          </form>
          {/* <p className="text-center">Forgot your password? <Link to="/admin/forgotpassword" className="text-purple-500 font-semibold hover:underline">Reset Password</Link></p> */}
          {/* Optionally add a link to user login */}
          <p className="text-center">Do you want to log in as a user? <NavLink to="/login" className="text-red-500 font-semibold hover:underline">User Login</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
