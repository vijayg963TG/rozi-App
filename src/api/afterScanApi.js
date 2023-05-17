import axios from 'axios';
import { getRootUrl } from './getRootUrl';
const ROOT_URL = getRootUrl();
import { setLoading, setError, setUser } from '../features/slices/afterScanSlice';
// userlogin
export const userScanned = (token) => async (dispatch) => {
  const Url = `${ROOT_URL}/punch_ins`;
  const Token = token
  console.log(Token)
  try {
    dispatch(setLoading(true));
    const response = await axios.get(Url,{
        headers:{
            Authorization:`${Token}`
        },
    });
    console.log(response)
    if (response) {
      dispatch(setUser(response.data.data));
    }
  } catch (error) {
    console.log("error",error)
    dispatch(setError(error.response.data));
  }
};
