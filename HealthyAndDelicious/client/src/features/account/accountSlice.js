import { createSlice } from '@reduxjs/toolkit';
import { signInUser, registerUser, logoutUser } from './accountAction.js';

// Define the initial state for the account slice
const initialState = {
  data: {}, // Stores account-related data (e.g., user info)
  isAuthenticated: false, // Indicates if the user is logged in
  status: 'idle', // Represents the status of async actions (idle | pending | fulfilled | rejected)
  error: null, // Stores error information, if any
};

// Create the account slice
const accountSlice = createSlice({
  name: 'account', // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer for signing in an account manually
    signInAccount: (state, action) => {
      state.isAuthenticated = true; // Mark the user as authenticated
      state.data = action.payload; // Store user data
    },
    // Reducer for creating an account manually
    createAccount: (state, action) => {
      state.isAuthenticated = true; // Mark the user as authenticated
      state.data = action.payload; // Store user data
    },
    // Reducer for signing out an account
    signOutAccount: (state) => {
      state.isAuthenticated = false; // Mark the user as not authenticated
      state.data = {}; // Clear user data
    },
  },
  // Handle extra reducers for async actions (signInUser, registerUser, logoutUser)
  extraReducers: (builder) => {
    builder
      // Handle signInUser async action
      .addCase(signInUser.pending, (state) => {
        state.status = 'pending'; // Mark the action as pending
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = 'fulfilled'; // Mark the action as successful
        state.isAuthenticated = true; // Mark the user as authenticated
        state.data = action.payload; // Store user data
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = 'rejected'; // Mark the action as failed
        state.error = action.payload; // Store error details
      })
      // Handle registerUser async action
      .addCase(registerUser.pending, (state) => {
        state.status = 'pending'; // Mark the action as pending
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'fulfilled'; // Mark the action as successful
        state.isAuthenticated = true; // Mark the user as authenticated
        state.data = action.payload; // Store user data
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'rejected'; // Mark the action as failed
        state.error = action.payload; // Store error details
      })
      // Handle logoutUser async action
      .addCase(logoutUser.pending, (state) => {
        state.status = 'pending'; // Mark the action as pending
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = 'fulfilled'; // Mark the action as successful
        state.isAuthenticated = false; // Mark the user as not authenticated
        state.data = {}; // Clear user data
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'rejected'; // Mark the action as failed
        state.error = action.payload; // Store error details
      });
  },
});

// Export the manually defined actions
export const { signInAccount, createAccount, signOutAccount } = accountSlice.actions;
// Export the reducer to be used in the store
export default accountSlice.reducer;
