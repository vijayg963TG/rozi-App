import axios from 'axios';
import {
  setLoading,
  setError,
  setStatusCode,
  setUser,
  setSuccessMessage
} from '../features/slices/loginSlice';
import { getRootUrl } from './getRootUrl';
const ROOT_URL = getRootUrl();

// userlogin
export const userLogin = (data,navigate) => async (dispatch) => {
  const Url = `${ROOT_URL}/login`;
  const body = {
    user: {
      email: data.email,
      password: data.password
    }
  };
  try {
    dispatch(setLoading(true));
    const response = await axios.post(Url, body);
    dispatch(setStatusCode(response.data.status.code));
    if (response.data.status.code == 200) {
      localStorage.setItem('user_token',response.data.data.token)
      dispatch(setSuccessMessage(response.data.status.message));
      dispatch(setUser(response.data.data));
      navigate('/')
    }
  } catch (error) {
    dispatch(setError(error.response.data.status.message));
  }
};
