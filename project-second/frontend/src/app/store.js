import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
// authReducer can be renamed

export const store = configureStore({
  reducer: {
      auth: authReducer,
  },
});

