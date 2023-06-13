import React, { useEffect } from 'react';
import './AfterScan.css';
import Modal from '../../../components/modal/Modal';
// import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getTokenFromLS } from '../../../utils/commonFuntion';

const AfterScan = () => {
  // const { error, user } = useSelector((state) => state.afterScan);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromLS();
    console.log(token);
    if (token) {
      console.log('valid user');
    } else {
      navigate('/');
    }
  }, []);

  return (
    <div className='dashboardcontainer'>
      <Modal />
      <div>
        <div>
          <div className='qrcodescannersection'>
            <img src='/assets/images/roziroti-logos.jpeg' className='dashboradlogo' />
            <div className='loginlink'>
              Hey User Return back to <Link to={'/login'}> Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterScan;
