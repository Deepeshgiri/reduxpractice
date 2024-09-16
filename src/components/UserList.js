// src/features/user/UserList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../redux/features/user/userSlice';

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const handleRemoveUser = (userId) => {
    dispatch(removeUser({ id: userId }));
  };

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
