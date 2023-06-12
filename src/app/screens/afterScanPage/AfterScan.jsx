import React from 'react';
// import '../dashboard/Dashboard.css';
import Modal from '../../../components/modal/Modal';
import './AfterScan.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getTokenFromLS } from '../../../utils/commonFuntion';

const AfterScan = () => {
  const { loading, error, user } = useSelector((state) => state.afterScan);
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
      <div>
        <div>
          <div className='qrcodescannersectionMobile'>
            <img src='/assets/images/roziroti-logos.jpeg' className='dashboradlogo' />
            {<Modal loading={loading} error={error} user={user} />}
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
