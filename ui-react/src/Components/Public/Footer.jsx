import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#212121] py-6">
  <div className="container mx-auto flex flex-col justify-between items-center h-full">
    <div>
      <h2 className="text-xl font-bold text-[#8ecccc]">Follow Us:</h2>
      <div className="flex mt-2">
      <a href="#" className="mr-4">
  <FontAwesomeIcon icon={faFacebookF} size="lg" style={{ color: '#3b5998' }} />
</a>
<a href="#" className="mr-4">
  <FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: '#1da1f2' }} />
</a>
<a href="#" className="mr-4">
  <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: '#c13584' }} />
</a>
      </div>
    </div>
    <div className="mt-auto text-white">
      <p>&copy; {new Date().getFullYear()} Demo. All rights reserved.</p>
    </div>
  </div>
</footer>


  )
}

export default Footer
