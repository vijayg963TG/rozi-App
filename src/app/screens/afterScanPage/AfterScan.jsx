import React, { useEffect } from 'react';
import './AfterScan.css';
import Modal from '../../../components/modal/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { getTokenFromLS } from '../../../utils/commonFuntion';

const AfterScan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromLS();
    if (token) {
      return;
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
