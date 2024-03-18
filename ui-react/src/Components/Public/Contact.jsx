import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
      <div className="max-w-lg mx-auto shadow-lg"> {/* Added shadow-lg class here */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input type="text" id="name" name="name" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="Your Name" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input type="email" id="email" name="email" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="Your Email" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your Message"></textarea>
          </div>
          <div className="flex justify-center"> {/* Centering the button */}
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
