import { configureStore } from '@reduxjs/toolkit';
import loggedReducer from '../features/user/logged';
import updateReducer from '../features/user/update';

export const store = configureStore({
  reducer: {
    loggedUser: loggedReducer,
    updateUser: updateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
