import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  // optionally set default headers / timeouts
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor — attach token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor — handle token expiration, global errors
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      // Optionally: logout user, clear token, redirect to login, etc.
      localStorage.removeItem('token');
      // window.location = '/login';  // or use navigate if in React
    }
    // You can also handle refresh token logic here if you implement it
    return Promise.reject(error);
  }
);

export default API;
