import axios from 'axios';
import { setError, setUser, setLoading } from '../features/slices/afterScanSlice';
import { getBaseUrl } from '../utils/commonFuntion';
const ROOT_URL = getBaseUrl();

// during qr scanning
export const userScanning = (token) => async (dispatch) => {
  const Url = `${ROOT_URL}/punch_ins`;
  try {
    dispatch(setLoading(true));
    const response = await axios.post(Url, null, {
      headers: { Authorization: token }
    });
    console.log(response);
    if (response) {
      dispatch(setUser(response.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response.data.error));
  }
};
