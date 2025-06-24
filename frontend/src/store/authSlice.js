// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,              // User details
  isAuthenticated: false,  // Login status
  loading: false,          // For loader
  error: null,             // Error message
  message: null            // Success message
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.message = action.payload.message;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    clearAuth(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.message = null;
    },
  },
});

export const { setAuthData, setError, setLoading, clearAuth } = authSlice.actions;
export default authSlice.reducer;
