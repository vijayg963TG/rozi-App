import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Alert } from './Alert';
import { getBaseUrl, getTokenFromLS } from './commonFuntion';

const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
  timeout: 100000,
  headers: {
    'X-AUTH-TOKEN': getTokenFromLS() || ''
  }
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const user = getTokenFromLS();
    if (user) {
      config.headers['X-AUTH-TOKEN'] = `${user}`;
    }
    //console.log("request config", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (config: any) => {
    return config;
  },
  (error) => {
    if (error.response.message === 'invalid signature' || error.response.status === 440) {
      sessionStorage.clear();
      window.location.href = '/';
      // }, 1000);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
