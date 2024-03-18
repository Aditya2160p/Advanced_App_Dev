import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  // State to store user profile data
  const [profile, setProfile] = useState(null);

  // Function to fetch user profile data
  useEffect(() => {
    // Fetch user profile data from an API or use mock data
    // Example:
    // fetch('api/profile')
    //   .then(response => response.json())
    //   .then(data => setProfile(data))
    const mockProfile = {
      name: 'John Doe',
      email: 'john@example.com',
      age: 30,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      // Add more profile data as needed
    };
    setProfile(mockProfile);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 flex justify-center">
      <div className="max-w-100 bg-white rounded-lg shadow-md p-6 flex items-center">
        <div className="mr-7">
          <FontAwesomeIcon icon={faUser} className="text-5xl text-gray-400" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
          {profile ? (
            <div className="mb-4">
              <div className="mb-2"><strong>Name:</strong> {profile.name}</div>
              <div className="mb-2"><strong>Email:</strong> {profile.email}</div>
              <div className="mb-2"><strong>Age:</strong> {profile.age}</div>
              <div className="mb-2"><strong>Bio:</strong> {profile.bio}</div>
              {/* Add more profile data display as needed */}
            </div>
          ) : (
            <p>Loading profile...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
