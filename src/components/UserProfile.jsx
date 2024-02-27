import React, { useState } from 'react';
import Nav from './Nav.jsx';
import SidebarThree from './Sidebartree.jsx';

function UserProfile() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet...',
    website: 'https://example.com',
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const toggleEditMode = () => setEditMode(!editMode);

  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <SidebarThree />
      </div>
      <div className="user-profile w-full max-w-md mx-auto mt-5 px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          {editMode ? 'Edit Profile' : userData.name}'s Profile
        </h2>

        {/* Profile Picture (adjust image source and styling as needed) */}
        <img
          className="w-32 h-32 rounded-full mx-auto mb-4 border border-gray-300"
          src="https://your-image-placeholder.com"
          alt="Profile Picture"
        />

        <div className="grid grid-cols-1 gap-4">
          {/* Editable Fields (conditionally disable in non-edit mode) */}
          <div className="grid grid-cols-1 gap-2">
            <label htmlFor="name" className="text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className={`border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                editMode ? '' : 'bg-gray-200 cursor-not-allowed'
              }`}
              disabled={!editMode}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label htmlFor="email" className="text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className={`border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                editMode ? '' : 'bg-gray-200 cursor-not-allowed'
              }`}
              disabled={!editMode}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label htmlFor="bio" className="text-gray-700">
              Bio:
            </label>
            <textarea
              id="bio"
              name="bio"
              value={userData.bio}
              onChange={handleChange}
              className={`border rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none ${
                editMode ? '' : 'bg-gray-200 cursor-not-allowed'
              }`}
              disabled={!editMode}
            />
          </div>

          {/* Optional Website Field (customize display and editing) */}
          <div className="grid grid-cols-1 gap-2">
            <label htmlFor="website" className="text-gray-700">
              Website:
            </label>
            <div className="flex items-center">
              {editMode ? (
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={userData.website}
                  onChange={handleChange}
                  className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <a href={userData.website} className="text-blue-500 underline">
                  {userData.website}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
