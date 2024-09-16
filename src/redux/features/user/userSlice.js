// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [] // Array of user objects
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload); // Add new user to the list
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload.id); // Remove user by id
    },
    clearUsers: (state) => {
      state.users = []; // Clear the list of users
    }
  }
});

export const { addUser, removeUser, clearUsers } = userSlice.actions;
export default userSlice.reducer;
