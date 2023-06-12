import { Alert } from '../utils/Alert';
import endPoints from '../constant/endPoints';
import { api } from '../utils/api';

export const resetPasswordApi = (values, navigate, tokenFromUrl, setLoading) => async () => {
  try {
    setLoading(true);
    api.postApiCall(
      `${endPoints.resetPassword}${tokenFromUrl}`,
      values,
      (response) => {
        Alert(1, response.data.message);
        navigate('/login');
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        Alert(2, err.response.data.message);
      }
    );
  } catch (error) {
    Alert(2, error.data.message);
  }
};
