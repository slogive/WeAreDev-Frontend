import { createSlice } from '@reduxjs/toolkit';

const loggedSlice = createSlice({
  name: 'logged',
  initialState: {
    id: NaN,
    name: '',
    surname: '',
    email: '',
    logged: false,
  },
  reducers: {
    userUpdate: (state, action) => {
      return (state = {
        id: action.payload.id,
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
        logged: true,
      });
    },
    userDestroy: (state) => {
      return (state = {
        id: NaN,
        name: '',
        surname: '',
        email: '',
        logged: false,
      });
    },
  },
});

export const { userUpdate, userDestroy } = loggedSlice.actions;
export default loggedSlice.reducer;
