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
export const userLogin = (data) => async (dispatch) => {
  console.log(dispatch);
  console.log(data);
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
      dispatch(setSuccessMessage(response.data.status.message));
      dispatch(setUser(response.data.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response.data));
  }
};
