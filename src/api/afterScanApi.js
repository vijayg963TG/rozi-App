import endPoints from '../constant/endPoints';
import { Alert } from '../utils/Alert';
import { api } from '../utils/api';
import { getUserIdLS } from '../utils/commonFuntion';

const userID = getUserIdLS();
const values = {
  userId: userID
};

// during qr scanning
// export const userScanning = (token) => async (dispatch) => {
//   const Url = `${ROOT_URL}/punch_ins`;
//   try {
//     dispatch(setLoading(true));
//     const response = await axios.post(Url, null, {
//       headers: { Authorization: token }
//     });
//     console.log(response);
//     if (response) {
//       dispatch(setUser(response.data));
//       dispatch(setLoading(false));
//     }
//   } catch (error) {
//     console.log(error);
//     dispatch(setError(error.response.data.error));
//   }
// };

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
