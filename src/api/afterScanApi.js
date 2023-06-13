import endPoints from '../constant/endPoints';
import { Alert } from '../utils/Alert';
import { api } from '../utils/api';

export const userScanning = (userID) => async () => {
  const values = {
    userId: userID
  };
  try {
    api.postApiCall(
      endPoints.recordAttendance,
      values,
      (res) => {
        console.log(res);
        Alert(1, res.data.message);
      },
      (err) => {
        Alert(2, err.response.data.message);
        console.log(err);
      }
    );
  } catch (error) {
    Alert(2);
    console.error(error);
  }
};
