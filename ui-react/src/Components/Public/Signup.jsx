import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    console.log('Signed up with:', formData);
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen flex container mx-auto py-20 px-4 items-center justify-center bg-white">
      <div className="flex justify-center items-center h-full mb-20">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <form onSubmit={handleSignUpSubmit}>
            <h2 className="text-3xl font-semibold mb-4 text-center">Sign Up</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Name
              </label>
              <input type="text" id="name" name="name" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email
              </label>
              <input type="email" id="email" name="email" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Phone Number
              </label>
              <input type="tel" id="phoneNumber" name="phoneNumber" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                <FontAwesomeIcon icon={faLock} className="mr-2" />
                Password
              </label>
              <input type="password" id="password" name="password" className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-purple-500" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit" className="w-full bg-[#212121] text-white  py-2 rounded-md  hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
          </form>
          <p className="mt-4 text-center text-gray-600">Already have an account? <NavLink to="/login" className="hover:underline text-red-500 ">Log In</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
