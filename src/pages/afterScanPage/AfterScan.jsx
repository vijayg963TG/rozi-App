import React from 'react';
import '../dashboard/Dashboard.css';
import Modal from '../../components/modal/Modal';
import './AfterScan.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {userScanned}  from '../../api/afterScanApi';
const AfterScan = () => {
  const dispatch = useDispatch();
  const { loading, error, } = useSelector((state) => state.afterScan);
  console.log(loading, error)

  useEffect(() => {
    const token = localStorage.getItem('user_token');
    if (token) {
      try {
        dispatch(userScanned(token))
        
      } catch (error) {
        console.log(error)
      }
    }
  },[]);

  return (
    <div className='dashboardcontainer'>
      <div>
        <div>
          <div className='qrcodescannersectionMobile'>
            <img src='/assets/images/roziroti-logos.jpeg' className='dashboradlogo' />
            {<Modal loading={loading} error={error} />}
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
