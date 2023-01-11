import { configureStore } from '@reduxjs/toolkit';
import loggedReducer from '../features/user/logged';

export const store = configureStore({
  reducer: {
    logged: loggedReducer,
  },
});
