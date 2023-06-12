import { Alert } from '../utils/Alert';
import endPoints from '../constant/endPoints';
import { api } from '../utils/api';
import { getUserIdLS } from '../utils/commonFuntion';

export const resetPasswordApi = (values, navigate, setLoading) => async () => {
  try {
    setLoading(true);
    api.postApiCall(
      `${endPoints.changePassword}${getUserIdLS()}`,
      values,
      (response) => {
        Alert(1, response.data.message);
        navigate('/login');
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        Alert(2, err.response.data.error.message);
      }
    );
  } catch (error) {
    console.error(error);
    Alert(2, error.error.message);
  }
};
