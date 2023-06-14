import {
  setError,
  setLoading,
  setStatusCode,
  setSuccessMessage
} from '../features/slices/signupSlice';
import endPoints from '../constant/endPoints';
import { Alert } from '../utils/Alert';
import { api } from '../utils/api';

export const userSignup = (values, navigate) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    api.postApiCall(
      endPoints.create,
      values,
      (response) => {
        const { message } = response.data;
        Alert(1, message);
        dispatch(setSuccessMessage(message));
        dispatch(setStatusCode(response.status));
        dispatch(setLoading(false));
        navigate('/login');
      },
      (err) => {
        dispatch(setLoading(false));
        const { message } = err.response.data.error;
        console.log(message);
        Alert(2, message);
      }
    );
  } catch (error) {
    Alert(2, error);
    dispatch(setLoading(false));
    dispatch(setError(error));
  }
};
