import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterUsers(state, action) {
      state.status = action.payload;
    },
  },
});

export const { filterUsers } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
