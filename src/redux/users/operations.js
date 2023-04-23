import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://642b121cb11efeb759a9f2bd.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const followUser = createAsyncThunk(
  'users/followUser',
  async (id, thunkAPI) => {
    const { users } = thunkAPI.getState();
    const user = users.all.find(user => user.id === id);

    try {
      const { data } = await axios.put(`/users/${id}`, {
        followers: user.followers + 1,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  'users/unFollowUser',
  async (id, thunkAPI) => {
    const { users } = thunkAPI.getState();
    const user = users.following.find(user => user.id === id);

    try {
      const { data } = await axios.put(`/users/${id}`, {
        followers: user.followers - 1,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
