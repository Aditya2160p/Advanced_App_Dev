import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bold, Menu, Home, Mail, User, LogIn } from 'lucide-react'; // Import Lucide icons
import imglogo from '../../assets/images/logo.png';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="w-full bg-white-500 h-15 shadow-sm shadow-black sticky">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <img src={imglogo} className="w-70 h-7" alt="Logo" />
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <Bold size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black hover:text-red-500">
                  <NavLink to="/">
                    <Home size={16} className="inline-block mr-2" /> Home
                  </NavLink>
                </li>
                <li className="text-black hover:text-red-500">
                  <NavLink to="/contact">
                    <Mail size={16} className="inline-block mr-2" /> Contact
                  </NavLink>
                </li>
                <li className="text-black hover:text-red-500">
                  <NavLink to="/user/dashboard">
                    <User size={16} className="inline-block mr-2" /> Profile
                  </NavLink>
                </li>
              </ul>

              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <NavLink
                  to={'/admin/login'}
                  className="inline-block w-full px-4 py-2 text-center text-white bg-blue-600 rounded-md shadow hover:bg-gray-800"
                >
                  Admin Sign in
                </NavLink>
                <NavLink
                  to={'/login'}
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Sign in
                </NavLink>
                <NavLink
                  to={'/signup'}
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Sign up
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <NavLink
              to={'/admin/login'}
              className="px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-red-600"
            >
              Admin Sign in
            </NavLink>
            <NavLink
              to={'/login'}
              className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-red-600"
            >
              Sign in
            </NavLink>
            <NavLink
              to={'/signup'}
              className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-red-600"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
