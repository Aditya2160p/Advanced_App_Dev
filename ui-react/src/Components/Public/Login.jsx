import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = ({ onLogin }) => {
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
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.email === formData.email && userData.password === formData.password) {
      console.log('Logging in with:', formData.email, formData.password);
      onLogin();
      window.location.href = '/user/dashboard';
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white mt-10 mb-20 p-8 rounded-lg shadow-lg max-w-md w-full">
          <form onSubmit={handleLoginSubmit} className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
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
            <button type="submit" className="bg-[#212121] text-white font-bold py-2 px-4 rounded-md  hover:bg-red-600 focus:outline-none focus:ring focus:ring-purple-300 w-full">Login</button>
          </form>
          {/* <p className="text-center">Forgot your password? <Link to="/forgotpassword" className="text-purple-500 font-semibold hover:underline">Reset Password</Link></p> */}
          <p className="text-center">Don't have an account? <NavLink to="/signup" className="text-red-500 font-semibold hover:underline">Sign Up</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
