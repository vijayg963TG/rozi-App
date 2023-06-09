import axios from 'axios';
import { getBaseUrl } from './commonFuntion';

const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
  timeout: 100000
  // headers: {
  //   'X-AUTH-TOKEN': getTokenFromLS() || ''
  // }
});

export default axiosInstance;
