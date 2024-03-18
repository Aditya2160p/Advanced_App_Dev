import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white-900 text-black w-full flex  h-0.5 shadow-sm shadow-black sticky">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center justify-start space-x-4">
                            <div>
                                <h2 className="text-red-500 text-lg font-semibold">Contact Us</h2>
                                <p>Email: JobPilot@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <ul className="flex justify-end space-x-4">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-blue-500" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faXTwitter} className="text-xl hover:text-blue-400" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-500" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                    <div>
                        <p>© 2024 JobPilot. All rights reserved.</p>
                    </div>
                    <div>
                        <p>
                        <NavLink to="/terms" className="text-red-500 hover:text-black">
      Terms and Conditions
    </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
