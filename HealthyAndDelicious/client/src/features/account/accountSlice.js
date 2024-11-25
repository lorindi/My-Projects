import { createSlice } from '@reduxjs/toolkit';
import { signInUser, registerUser, logoutUser } from './accountAction.js';

const initialState = {
  data: {},
  isAuthenticated: false,
  status: 'idle', // idle | pending | fulfilled | rejected
  error: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    signInAccount: (state, action) => {
      state.isAuthenticated = true;
      state.data = action.payload;
    },
    createAccount: (state, action) => {
      state.isAuthenticated = true;
      state.data = action.payload;
    },
    signOutAccount: (state) => {
      state.isAuthenticated = false;
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder
      // signInUser
      .addCase(signInUser.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.isAuthenticated = true;
        state.data = action.payload;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      // registerUser
      .addCase(registerUser.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.isAuthenticated = true;
        state.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      // logoutUser
      .addCase(logoutUser.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = 'fulfilled';
        state.isAuthenticated = false;
        state.data = {};
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { signInAccount, createAccount, signOutAccount } = accountSlice.actions;
export default accountSlice.reducer;


