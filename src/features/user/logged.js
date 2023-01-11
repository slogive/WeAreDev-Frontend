import { createSlice } from '@reduxjs/toolkit';

const loggedSlice = createSlice({
  name: 'logged',
  initialState: [],
  reducers: {
    userUpdate(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
      });
    },
    userDestroy(state, action) {
      const user = state.find((user) => user.id === action.payload);
      user = {
        id: NaN,
        name: '',
        surname: '',
        email: '',
      };
    },
  },
});

export const { userUpdate, userDestroy } = loggedSlice.actions;
export default loggedSlice.reducer;
