import axios from 'axios';

axios.defaults.baseURL = 'https://642b121cb11efeb759a9f2bd.mockapi.io';

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get('/users');

    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const setFollowUser = async (id, update) => {
  try {
    await axios.put(`/users/${id}`, update);
  } catch (error) {
    console.error(error.message);
  }
};

export const setUnFollowUser = async (id, update) => {
  try {
    await axios.put(`/users/${id}`, update);
  } catch (error) {
    console.error(error.message);
  }
};
