// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add slices for internships, applications, etc., as needed
  },
});

export default store;