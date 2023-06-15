import axios from 'axios';
import { getBaseUrl, getTokenFromLS } from './commonFuntion';

const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
  timeout: 30000
  // headers: {
  //   'X-AUTH-TOKEN': getTokenFromLS() || ''
  // }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user = getTokenFromLS();
    if (user) {
      config.headers['Authorization'] = `Bearer ${user}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
