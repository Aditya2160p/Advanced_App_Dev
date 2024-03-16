import React from 'react'
import '../assets/css/Home.css'
const Home = () => {
  return (
    <div className="background-animation bg-[#212121]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#8ecccc" fill-opacity="1" d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <div className="content">
          <h1 className="text-white text-4xl font-bold">Welcome to Our Website</h1>
          <p className="text-white">This is some content on our home page.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#8ecccc" fill-opacity="1" d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" className="wave"></path>
        </svg>
      </div>

  )
}

export default Home
