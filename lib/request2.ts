// lib/axiosInstance.js
import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_ENDPOINT || "http://localhost:4000",
});

request.defaults.params = {};

request.interceptors.request.use(
  (config) => {
    // Add custom headers or other configuration before request is sent
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    // Transform response data
    return response.data;
  },
  (error) => {
    // Handle response error
    const status = error?.response?.data?.status || 500;
    const message = error?.response?.data?.message || 'Something went wrong!';
    throw new Error(message);
  }
);

export default request;
