import axios from 'axios';
import { getBaseUrl } from '../utils/commonFuntion';
import { Alert } from '../utils/Alert';
import endPoints from '../constant/endPoints';
const ROOT_URL = getBaseUrl();

// userlogin
export const forgotPassword = (data, navigate) => async (dispatch) => {
  const Url = `${ROOT_URL}${endPoints.sendMail}`;

  try {
    dispatch(Alert(1));
    Alert(3);
    const response = await axios.post(Url, data);
    if (response.status == 200) {
      console.log(response);
      Alert(1, response.data.message);
      navigate('/');
    }
  } catch (error) {
    console.log(error);
    Alert(2);
  }
};
