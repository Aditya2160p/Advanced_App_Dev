import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <div className="mt-1">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                </div>
                <input type="email" id="email" name="email" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Enter your email address" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <div className="mt-1">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                </div>
                <input type="password" id="password" name="password" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Enter your password" />
              </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-[#212121] text-cyan-300  py-2 rounded-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-gray-600">Already have an account? <NavLink to="/login" className="text-indigo-600 hover:text-indigo-800">Log In</NavLink></p>
      </div>
    </div>
  );
}

export default Signup;
