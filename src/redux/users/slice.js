import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, followUser, unfollowUser } from './operations';

const initialState = {
  all: [],
  following: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.all = action.payload;
      })
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(followUser.pending, handlePending)
      .addCase(followUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.following = [...state.following, action.payload];
      })
      .addCase(followUser.rejected, handleRejected)
      .addCase(unfollowUser.pending, handlePending)
      .addCase(unfollowUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.following.findIndex(
          user => user.id === action.payload.id
        );
        state.following.splice(index, 1);
      })
      .addCase(unfollowUser.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
