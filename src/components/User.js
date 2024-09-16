// src/features/user/AddUser.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/features/user/userSlice'

const AddUser = () => {
  // Initialize a single state object for user information
  const [user, setUser] = useState({ name: '', email: '' });
  const dispatch = useDispatch();

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle adding user
  const handleAddUser = () => {
    const newUser = {
      id: Date.now(), // Simple unique id (could be replaced with a UUID in a real app)
      name: user.name,
      email: user.email
    };
    dispatch(addUser(newUser));
    // Reset the user state
    setUser({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;
