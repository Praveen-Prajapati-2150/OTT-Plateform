import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  // baseURL: 'https://www.tvmaze.com/api ',
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

// const instance = axios.create({
//   baseURL: 'https://some-domain.com/',
//   // timeout: 1000,
//   // headers: { 'X-Custom-Header': 'foobar' },
// });

export default instance;
