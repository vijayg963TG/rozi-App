import axios from 'axios';
import { getRootUrl } from './getRootUrl';
const ROOT_URL = getRootUrl();

import { setError, setUser, setLoading } from '../features/slices/afterScanSlice';

//after qr scan
// export const userScanned = (token) => async (dispatch) => {
//   const Url = `${ROOT_URL}/punch_ins`;
//   const Token = token;
//   console.log(Token);
//   try {
//     dispatch(setLoading(true));
//     const response = await axios.get(Url, {
//       headers: {
//         Authorization: `${Token}`
//       }
//     });
//     if (response) {
//       dispatch(setUser(response.data.data));
//     }
//   } catch (error) {
//     console.log('error', error);
//     dispatch(setError(error.response.data));
//   }
// };

// during qr scanning
export const userScanning = (token) => async (dispatch) => {
  const Url = `${ROOT_URL}/punch_ins`;
  try {
    dispatch(setLoading(true));
    const response = await axios.post(Url, null, {
      headers: { Authorization: token }
    });
    if (response) {
      dispatch(setUser(response.data));
    }
  } catch (error) {
    dispatch(setError(error.response.data.error));
  }
};
