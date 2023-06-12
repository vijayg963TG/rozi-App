import {
  setLoading,
  setError,
  setStatusCode,
  setTokenData,
  setSuccessMessage
} from '../features/slices/loginSlice';
import { Alert } from '../utils/Alert';
import endPoints from '../constant/endPoints';
import { api } from '../utils/api';
import { setTokenFromLS } from '../utils/commonFuntion';

export const userLogin = (values, navigate) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    api.postApiCall(
      endPoints.login,
      values,
      (response) => {
        const { token, message } = response.data;
        setTokenFromLS(token);
        Alert(1, message);
        dispatch(setSuccessMessage(message));
        dispatch(setTokenData(token));
        dispatch(setStatusCode(response.status));
        dispatch(setLoading(false));
        navigate('/');
      },
      (err) => {
        Alert(2, err.response.data.message);
        dispatch(setLoading(false));
      }
    );
  } catch (error) {
    Alert(2, error.data.message);
    dispatch(setLoading(false));
    dispatch(setError(error));
  }
};
