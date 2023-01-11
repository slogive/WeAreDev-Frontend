import { createSlice } from '@reduxjs/toolkit';

const updateSlice = createSlice({
  name: 'update',
  initialState: {
    id: NaN,
    name: '',
    surname: '',
    email: '',
  },
  reducers: {
    userUpdate: (state, action) => {
      return (state = {
        id: action.payload.id,
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
      });
    },
    userDestroy: (state) => {
      return (state = {
        id: NaN,
        name: '',
        surname: '',
        email: '',
      });
    },
  },
});

export const { userUpdate, userDestroy } = updateSlice.actions;
export default updateSlice.reducer;
