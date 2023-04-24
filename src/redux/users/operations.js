import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://642b121cb11efeb759a9f2bd.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    const { users } = thunkAPI.getState();

    try {
      const { data } = await axios.get('/users?&page=1&limit=3');

      const items = data.map(item => {
        return {
          ...item,
          isFollowing: users.following.includes(item.id) ? true : false,
        };
      });

      return items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMoreUsers = createAsyncThunk(
  'users/loadMore',
  async (page, thunkAPI) => {
    const { users } = thunkAPI.getState();

    try {
      const { data } = await axios.get(`/users?&page=${page}&limit=3`);

      const items = data.map(item => {
        return {
          ...item,
          isFollowing: users.following.includes(item.id) ? true : false,
        };
      });

      return items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const followUser = createAsyncThunk(
  'users/followUser',
  async (id, thunkAPI) => {
    const { users } = thunkAPI.getState();
    const user = users.items.find(user => user.id === id);

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
    const user = users.items.find(user => user.id === id);

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
