import axios from 'axios';
import { getCSRFToken } from './csrfToken';
import envConfig from "./envConfig";

const axiosInstance = axios.create({
  baseURL: envConfig.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'X-CSRF-TOKEN': getCSRFToken(),
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const csrfToken = getCSRFToken();
    if (csrfToken) {
      config.headers['X-CSRF-TOKEN'] = csrfToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 401) {
        console.error('Unauthorized access, redirecting to login');
        window.location.href = '/login';
      } else if (status === 403) {
        console.error('Forbidden access');
        window.location.href = '/403';
      } else if (status === 500) {
        console.error('Server error', data);
        alert('Something went wrong, please try again later.');
      } else {
        console.error('Error response', data);
      }
    } else if (error.request) {
      console.error('No response received', error.request);
      alert('Network error, please check your connection.');
    } else {

      console.error('Error', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
