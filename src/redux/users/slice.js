import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUsers,
  followUser,
  loadMoreUsers,
  unfollowUser,
} from './operations';

const initialState = {
  items: [],
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
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(loadMoreUsers.pending, handlePending)
      .addCase(loadMoreUsers.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload.length === 0) state.isLoading = true;

        state.items = [...state.items, ...action.payload];
      })
      .addCase(loadMoreUsers.rejected, handleRejected)
      .addCase(followUser.pending, handlePending)
      .addCase(followUser.fulfilled, (state, action) => {
        state.isLoading = false;

        const index = state.items.findIndex(
          user => user.id === action.payload.id
        );

        state.items.splice(index, 1, {
          ...action.payload,
          isFollowing: true,
          followers: action.payload.followers,
        });

        state.following.push(action.payload.id);
      })
      .addCase(followUser.rejected, handleRejected)
      .addCase(unfollowUser.pending, handlePending)
      .addCase(unfollowUser.fulfilled, (state, action) => {
        state.isLoading = false;

        const index = state.items.findIndex(
          user => user.id === action.payload.id
        );

        state.items.splice(index, 1, {
          ...action.payload,
          isFollowing: false,
          followers: action.payload.followers,
        });

        const indexFollowing = state.following.findIndex(
          user => user.id === action.payload.id
        );

        state.following.splice(indexFollowing, 1);
      })
      .addCase(unfollowUser.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
