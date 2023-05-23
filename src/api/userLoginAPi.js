import axios from 'axios';
import {
  setLoading,
  setError,
  setStatusCode,
  setUser
  // setSuccessMessage
} from '../features/slices/loginSlice';
import { getRootUrl } from './getRootUrl';
const ROOT_URL = getRootUrl();

// userlogin
export const userLogin = (data, navigate) => async (dispatch) => {
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
    console.log(response);
    dispatch(setStatusCode(response.status));
    if (response.status == 200) {
      localStorage.setItem('user_token', response.data.data.token);
      localStorage.setItem('userdata', response.data.data.user.first_name);
      // dispatch(setSuccessMessage(response.data.status.message));
      dispatch(setUser(response.data.data));
      navigate('/');
    }
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response.data));
  }
};
