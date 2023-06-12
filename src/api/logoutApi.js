import { api } from '../utils/api';
import endPoints from '../constant/endPoints';
import { Alert } from '../utils/Alert';
import { getUserIdLS } from '../utils/commonFuntion';

export const userLogout = async (navigate, setLoading) => {
  const userId = getUserIdLS();
  try {
    setLoading(true);
    api.postApiCall(
      `${endPoints.logout}/${userId}`,
      {},
      (res) => {
        setLoading(false);
        localStorage.clear();
        navigate('/login');
        Alert(1, res.data.message);
      },
      (err) => {
        setLoading(false);
        Alert(2, err.message);
      }
    );
  } catch (error) {
    console.error(error);
  }
};
