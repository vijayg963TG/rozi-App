import { Alert } from '../utils/Alert';
import endPoints from '../constant/endPoints';
import { api } from '../utils/api';

export const forgotPassword = (values, setWaitRes) => async () => {
  try {
    setWaitRes(true);
    api.postApiCall(
      endPoints.sendMail,
      values,
      (response) => {
        Alert(1, response.data.message);
        setWaitRes(false);
      },
      (err) => {
        setWaitRes(false);
        Alert(2, err.message);
      }
    );
  } catch (error) {
    Alert(2, error.message);
  }
};
