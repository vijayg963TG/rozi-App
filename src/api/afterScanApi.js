import endPoints from '../constant/endPoints';
import { Alert } from '../utils/Alert';
import { api } from '../utils/api';
import { setShowModal } from '../features/slices/afterScanSlice';

export const userScanning = (userID) => async (dispatch) => {
  const values = {
    userId: userID
  };
  try {
    api.postApiCall(
      endPoints.recordAttendance,
      values,
      (res) => {
        Alert(1, res.data.message);
        dispatch(setShowModal());
      },
      (err) => {
        Alert(2, err.response.data.message);
      }
    );
  } catch (error) {
    Alert(2);
    console.error(error);
  }
};
