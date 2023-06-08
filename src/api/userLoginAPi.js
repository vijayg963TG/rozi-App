import axios from 'axios';
import {
  setLoading,
  setError,
  setStatusCode
  // setUser,
  // setSuccessMessage
} from '../features/slices/loginSlice';
import { getBaseUrl } from '../utils/commonFuntion';
import { Alert } from '../utils/Alert';
const ROOT_URL = getBaseUrl();

// userlogin
export const userLogin = (data, navigate) => async (dispatch) => {
  const Url = `${ROOT_URL}/login`;
  const body = {
    email: data.email,
    password: data.password
  };
  try {
    dispatch(setLoading(true));
    Alert(3);
    const response = await axios.post(Url, body);
    dispatch(setStatusCode(response.status));
    if (response.status == 200) {
      console.log(response);
      Alert(1, response.data.message);
      localStorage.setItem('user_token', response.data.token);
      // localStorage.setItem('userdata', response.data.user.first_name);
      // dispatch(setSuccessMessage(response.data.status.message));
      // dispatch(setUser(response.data));
      navigate('/');
    }
  } catch (error) {
    console.log(error);
    Alert(2);
    dispatch(setError(error.response.data));
  }
};
