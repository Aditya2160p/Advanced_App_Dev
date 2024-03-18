import React from 'react';
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import job1Image from '../assets/images/google-logo-9834.png';
import job2Image from '../assets/images/flipkart-logo-39907.png';
import job3Image from '../assets/images/picture-logo-42725.png';
import web from '../assets/images/web.png'
import ds from'../assets/images/ds.png'
import dm from'../assets/images/dm.png'
import ImageSlider from './imageslider';
const JobCard = ({ title, description, image }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      <img src={image} alt={title} className="w-full h-auto rounded-md" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}
const CourseCard = ({ title, description, image }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white mb-4">
      <img src={image} alt={title} className="w-full h-auto rounded-md mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}

const Home = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <img src={logo} alt="JobPilot Logo" className="mx-auto mb-8 w-80 h-auto" />
      <div className="flex justify-center mb-8">
        <input type="text" placeholder="Search for jobs..." className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500" />
        <select className="border border-gray-300 rounded-none px-4 py-2 focus:outline-none">
          <option value="">Select Experience</option>
          <option value="0-1">0-1 Years</option>
          <option value="1-3">1-3 Years</option>
          <option value="3-5">3-5 Years</option>
          {/* Add more options as needed */}
        </select>
        <select className="border border-gray-300 rounded-none px-4 py-2 focus:outline-none">
          <option value="">Select Location</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="London">London</option>
          {/* Add more options as needed */}
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md focus:outline-none hover:bg-blue-600">
    <FontAwesomeIcon icon={faSearch} className="mr-2" /> </button>
      </div>
      <h2 className="text-2xl font-semibold text-center mb-4">TOP COMPANIES HIRING NOW</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
       <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
        <JobCard
          title="Frontend Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo pharetra nisi, a sollicitudin mi tempor at."
          image={job1Image} 
        />
        </div>
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
        <JobCard
          title="Backend Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo pharetra nisi, a sollicitudin mi tempor at."
          image={job2Image} 
        />
        </div>
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
        <JobCard
          title="UI/UX Designer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo pharetra nisi, a sollicitudin mi tempor at."
          image={job3Image} 
        />
        </div>
        {/* //CourseCards */}
        <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Job Training Courses</h2>
      <div className="max-w-xl mx-auto">
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-80'>
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <CourseCard
            title="Web Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo pharetra nisi, a sollicitudin mi tempor at."
            image={web}
          />
          </div>
          <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <CourseCard
            title="Data Science"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo pharetra nisi, a sollicitudin mi tempor at."
            image={ds}
          />
          </div>
          <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <CourseCard
            title="Digital Marketing"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo pharetra nisi, a sollicitudin mi tempor at."
            image={dm}
          />
          </div>
        </div>
      </div>
    </div>
    {/* //endofcoursecards */}
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Job Training Courses</h2>
      <div className="max-w-xl mx-auto">
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-80'>
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <CourseCard
            title="Web Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo pharetra nisi, a sollicitudin mi tempor at."
            image="web-development.jpg"
          />
          </div>
          <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <CourseCard
            title="Data Science"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo pharetra nisi, a sollicitudin mi tempor at."
            image="data-science.jpg"
          />
          </div>
          <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <CourseCard
            title="Digital Marketing"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo pharetra nisi, a sollicitudin mi tempor at."
            image="digital-marketing.jpg"
          />
          </div>
        </div>
      </div>
    </div>

      </div>
      <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Top Recruiters</h1>
      <ImageSlider />
    </div>
    </div>
  );
}

export default Home;
