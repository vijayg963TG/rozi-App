import { Alert } from '../utils/Alert';
import endPoints from '../constant/endPoints';
import { api } from '../utils/api';

export const forgotPassword = (values, navigate) => async (dispatch) => {
  try {
    api.postApiCall(
      endPoints.sendMail,
      values,
      (response) => {
        console.log(response);
        Alert(1, response.data.message);
        dispatch();
        navigate('/');
      },
      (err) => {
        console.log(err);
      }
    );
  } catch (error) {
    Alert(2);
  }
};
