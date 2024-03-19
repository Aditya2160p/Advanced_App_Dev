import React from 'react';
import { LayoutDashboard, User, Box } from 'lucide-react'; // Import Lucid icons

const Membership = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Membership Plans</h1>
      <div className="flex justify-center"> {/* Center the grid */}
        <div className="grid grid-cols-3 gap-10">
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <MembershipCard
            title="Plan A"
            price="$9.99/month"
            icon={<LayoutDashboard />} // Lucid Dashboard icon
            features={[
              'Feature 1',
              'Feature 2',
              'Feature 3',
              // Add more features as needed
            ]}
          />
          </div>
           <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <MembershipCard
            title="Plan B"
            price="$19.99/month"
            icon={<User />} // Lucid User icon
            features={[
              'All Plan A features',
              'Feature 4',
              'Feature 5',
              // Add more features as needed
            ]}
          />
          </div>
           <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
          <MembershipCard
            title="Plan C"
            price="$29.99/month"
            icon={<Box />} // Lucid Box icon
            features={[
              'All Plan B features',
              'Feature 6',
              'Feature 7',
              // Add more features as needed
            ]}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

const MembershipCard = ({ title, price, icon, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-center mb-4">{icon}</div> {/* Display Lucid icon */}
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="text-2xl font-bold mb-4">{price}</div>
      <ul className="list-disc list-inside mb-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600">Subscribe</button>
    </div>
  );
}

export default Membership;
