import endPoints from '../constant/endPoints';
import { Alert } from '../utils/Alert';
import { api } from '../utils/api';
import { getUserIdLS } from '../utils/commonFuntion';

const userID = getUserIdLS();
const values = {
  userId: userID
};

export const userScanning = () => async () => {
  try {
    api.postApiCall(
      endPoints.recordAttendance,
      values,
      (res) => {
        console.log(res);
        Alert(1, res.data.message);
      },
      (err) => {
        console.log(err.error.message);
        Alert(2);
      }
    );
  } catch (error) {
    console.error(error);
  }
};
