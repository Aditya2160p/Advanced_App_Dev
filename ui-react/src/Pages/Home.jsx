import React from 'react';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import job1Image from '../assets/images/google-logo-9834.png';
import job2Image from '../assets/images/flipkart-logo-39907.png';
import job3Image from '../assets/images/picture-logo-42725.png';
import web from '../assets/images/web.png';
import ds from '../assets/images/ds.png';
import dm from '../assets/images/dm.png';
import ImageSlider from './imageslider';
import office from '../assets/images/office-620817.jpg';
const JobCard = ({ title, description, image }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      <img src={image} alt={title} className="w-full h-auto rounded-md" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
};
const CourseCard = ({ title, description, image }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white mb-4">
      <img src={image} alt={title} className="w-full h-auto rounded-md mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};
const News = ({ title, description }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <img src={logo} alt="JobPilot Logo" className="mx-auto mb-8 w-80 h-auto" />
      <div className="flex justify-center mb-8">
        <input type="text" placeholder="Search for jobs..." className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500" />
        <select className="border border-gray-300 rounded-none px-4 py-2 focus:outline-none">
          <option value="">Select Domain</option>
          <option value="0-1">Data Science</option>
          <option value="1-3">Designing</option>
          <option value="3-5">Web Development</option>
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
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
        </button>
      </div>

      {/* Image and text section */}
      <div className="rounded-lg overflow-hidden border border-gray-300" style={{ height: "450px" }}>
  <div className="flex items-center justify-between h-full">
    {/* Big image */}
    <div className="w-1/2 relative">
      <img src={office} alt="Big Image" className="w-full h-full object-cover" />
    </div>
    {/* Text section */}
    <div className="w-1/2 ml-4">
      <h2 className="text-3xl font-semibold mb-4">JobPilot</h2>
      <p className="text-lg text-gray-700">JobPilot is your ultimate destination for finding the perfect job. Our platform is designed to connect talented individuals with exciting career opportunities across various industries and locations.</p>
      <p className="text-lg text-gray-700 mt-4">With JobPilot, you can explore a wide range of job listings, from entry-level positions to executive roles. We provide comprehensive resources and tools to help you navigate the job search process with ease.</p>
      <p className="text-lg text-gray-700 mt-4">Whether you're a recent graduate seeking your first job or an experienced professional looking for new challenges, JobPilot is here to empower you on your career journey. Join JobPilot today and take the next step towards your dream job!</p>
    </div>
  </div>
</div>




      <h2 className="text-2xl font-semibold text-center mb-4">TOP COMPANIES HIRING NOW</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <JobCard
            title="Frontend Developer"
            description="Google is hiring a Frontend Developer! Join us to craft elegant user interfaces and deliver exceptional experiences. Collaborate with designers, optimize performance, and stay updated with the latest technologies. Apply now!"
            image={job1Image}
          />
        </div>
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <JobCard
            title="Backend Developer"
            description="Flipkart is seeking a Backend Developer! Join us to develop robust backend solutions and ensure seamless functionality. Collaborate with cross-functional teams, optimize performance, and stay updated with industry trends. Apply now!"
            image={job2Image}
          />
        </div>
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <JobCard
            title="UI/UX Designer"
            description="Amazon is seeking a talented UI/UX Designer! Join our team to create intuitive user interfaces and engaging experiences. Collaborate with product managers, iterate designs based on user feedback, and stay updated with design trends. Apply now!"
            image={job3Image}
          />
        </div>
      </div>

      {/* Big card for Course Cards and News */}
      <div className="rounded-lg shadow-md bg-gray-100 p-4 mt-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Job Training Courses</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <CourseCard
              title="Web Development"
              description="Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build responsive and interactive websites, and explore frameworks like React and Angular."
              image={web}
            />
            </div>
            <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <CourseCard
              title="Data Science"
              description="Gain expertise in data analysis, statistical modeling, and machine learning algorithms. Learn to extract insights from data and make data-driven decisions using Python, R, and SQL."
              image={ds}
            />
            </div>
            <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <CourseCard
              title="Digital Marketing"
              description="Explore digital marketing strategies, including SEO, SEM, and social media marketing. Learn to create effective marketing campaigns, analyze metrics, and optimize online presence."
              image={dm}
            />
            </div>
            <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <CourseCard
              title="Data Science"
              description="Gain expertise in data analysis, statistical modeling, and machine learning algorithms. Learn to extract insights from data and make data-driven decisions using Python, R, and SQL."
              image={ds}
            />
            </div>
            <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <CourseCard
              title="Digital Marketing"
              description="Explore digital marketing strategies, including SEO, SEM, and social media marketing. Learn to create effective marketing campaigns, analyze metrics, and optimize online presence."
              image={dm}
            />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center mt-8 mb-4">Job Opportunities</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <News
              title="Software Engineer Positions"
              description="Explore various software engineer positions available in top tech companies. Learn about job requirements, responsibilities, and tips for landing your dream job."
            />
            <News
              title="Data Analyst Opportunities"
              description="Discover exciting data analyst job opportunities across different industries. Get insights into the skills and qualifications required and how to excel in this role."
            />
            <News
              title="Software Engineer Positions"
              description="Explore various software engineer positions available in top tech companies. Learn about job requirements, responsibilities, and tips for landing your dream job."
            />
            <News
              title="Data Analyst Opportunities"
              description="Discover exciting data analyst job opportunities across different industries. Get insights into the skills and qualifications required and how to excel in this role."
            />
            <News
              title="Software Engineer Positions"
              description="Explore various software engineer positions available in top tech companies. Learn about job requirements, responsibilities, and tips for landing your dream job."
            />
            <News
              title="Data Analyst Opportunities"
              description="Discover exciting data analyst job opportunities across different industries. Get insights into the skills and qualifications required and how to excel in this role."
            />
            {/* Add more News components as needed */}
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
