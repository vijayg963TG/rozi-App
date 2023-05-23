import React from 'react';
import '../dashboard/Dashboard.css';
import Modal from '../../components/modal/Modal';
import './AfterScan.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userScanning } from '../../api/afterScanApi';
import { useNavigate } from 'react-router-dom';
const AfterScan = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.afterScan);
  const { data } = useSelector((state) => state.dashboard);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('user_token');
    if (token && data) {
      try {
        dispatch(userScanning(token));
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate('/');
    }
  }, []);

  return (
    <div className='dashboardcontainer'>
      <div>
        <div>
          <div className='qrcodescannersectionMobile'>
            <img src='/assets/images/roziroti-logos.jpeg' className='dashboradlogo' />
            {<Modal loading={loading} error={error} user={user} />}
            {/* <div className='loginlink'>
              Hey User Return back to <Link to={'/login'}> Login</Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterScan;
