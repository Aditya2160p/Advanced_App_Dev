import React from 'react';

const Usersdata = () => {
  // Sample data for 8 users
  const usersData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phoneNumber: '1234567890', subscriptionPlan: 'Plan A' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phoneNumber: '9876543210', subscriptionPlan: 'Plan B' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phoneNumber: '4567891230', subscriptionPlan: 'Plan C' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', phoneNumber: '7891234560', subscriptionPlan: 'Plan A' },
    { id: 5, name: 'Eva Green', email: 'eva@example.com', phoneNumber: '3216549870', subscriptionPlan: 'Plan B' },
    { id: 6, name: 'Michael Clark', email: 'michael@example.com', phoneNumber: '6549873210', subscriptionPlan: 'Plan C' },
    { id: 7, name: 'Sara White', email: 'sara@example.com', phoneNumber: '9873216540', subscriptionPlan: 'Plan A' },
    { id: 8, name: 'David Lee', email: 'david@example.com', phoneNumber: '6543219870', subscriptionPlan: 'Plan B' },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">User Data</h1>
      <table className="min-w-full divide-y divide-gray-800">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">User ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Phone Number</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Subscription Plan</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {usersData.map(user => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.phoneNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.subscriptionPlan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usersdata;
