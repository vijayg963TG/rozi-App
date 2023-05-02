import React from 'react';
// import useWindowSize from '../../hooks/useWindowSize';
import '../dashboard/Dashboard.css';
import Modal from '../../components/modal/Modal';
import { Link } from 'react-router-dom';
import './AfterScan.css';
// import Icon from '../../components/Icon/Icon';

const AfterScan = () => {
  //  const [width] = useWindowSize();
  return (
    <div className='dashboardcontainer'>
      <div>
        <div className='subcontainer'>
          <div className='qrcodescannersectionMobile'>
            <img src='/assets/images/roziroti-logos.jpeg' className='dashboradlogo' />
            {<Modal />}
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
