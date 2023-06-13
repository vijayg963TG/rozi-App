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
        Alert(1, res.message);
      },
      (err) => {
        console.log(err.message);
        Alert(2, err.message);
      }
    );
  } catch (error) {
    Alert(2);
    console.error(error);
  }
};
