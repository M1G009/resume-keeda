import axios from 'axios';

// Create an instance of Axios with custom configurations
const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL, // Set your base URL
  timeout: 5000, // Set timeout
  headers: {
    'Content-Type': 'application/json', // Set default headers
  },
});

export { axiosInstance }