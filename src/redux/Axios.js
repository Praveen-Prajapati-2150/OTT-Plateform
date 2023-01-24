import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

instance.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
      // 'moRDqHouGPKDZj9AojHdv2uZhvxysygh'
    }`;
  }
  return req;
});

export default instance;
