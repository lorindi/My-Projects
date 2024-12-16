import api from "../../services/axiosConfig";

import { signInAccount, createAccount, signOutAccount } from "./accountSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Асинхронно действие за вход
export const signInUser = createAsyncThunk(
  "account/signInUser",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sign-in", credentials);
      const token = response.data.token;
      console.log(token);
      
      localStorage.setItem("token", token);
      dispatch(signInAccount(response.data.userInfo));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Unknown error" });
    }
  }
);

// Асинхронно действие за създаване на акаунт
export const registerUser = createAsyncThunk(
  "account/registerUser",
  async (userData, { dispatch, rejectWithValue }) => {  
    try {
      const response = await api.post("/auth/create-account", userData);
      dispatch(createAccount(response.data));
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Асинхронно действие за изход
export const logoutUser = createAsyncThunk(
  "account/logoutUser",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await api.post("/auth/logout");
      dispatch(signOutAccount());
    } catch (error) {
      console.error("Logout failed:", error);
      return rejectWithValue(error.response.data);
    }
  }
);
