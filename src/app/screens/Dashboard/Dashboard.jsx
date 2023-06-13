import React from 'react';
import './dashboard.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { getTokenFromLS, setUserIdLS } from '../../../utils/commonFuntion';
import { userScanning } from '../../../api/afterScanApi';
import { userLogout } from '../../../api/logoutApi';
import Scaner from './Scaner';
import { Alert } from '../../../utils/Alert';

const Dashboard = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getTokenFromLS();
  const decodedToken = token ? jwtDecode(token) : '';
  const [result, setResult] = useState('No Result');
  console.log(result);

  const correctScanUrl = 'https://qr-code-fronted.vercel.app/roziroti/qrscanned';

  const handleScan = (result) => {
    if (result) {
      console.log(result);
      Alert(1, 'QR Scan Successfully');
      setResult(result);
      if (result.text == correctScanUrl) {
        dispatch(userScanning());
        navigate(correctScanUrl);
      } else {
        navigate('/');
      }
    }
  };

  useEffect(() => {
    if (token) {
      setUserIdLS(decodedToken.userId);
      try {
        if (token == null) {
          navigate('/login');
        }
        if (decodedToken && decodedToken.exp < Date.now() / 1000) {
          navigate('/');
        }
      } catch (error) {
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className='dashboardcontainer'>
      <div className='subcontainer'>
        <div className='userinformationssection'>
          <img src='/assets/images/roziroti-logos.jpeg' className='dashboradlogo' />
          <h2 className='userinformationssectionspan'>Hey</h2>
        </div>
        <div className='qrcodescannersection'>
          {showScanner ? (
            <div>
              <Scaner handleScan={handleScan} />
            </div>
          ) : (
            <>
              <h2 className='qrcodescannersectionspan'>
                Click the button below and Scan the QR Code
              </h2>

              <div className='BtnSec'>
                <button className='qrcodescannersectionbtn' onClick={() => setShowScanner(true)}>
                  open the scanner
                  <img src='/assets/images/qr-code.gif' className='qrcodescannersectiongif' />
                </button>
                <button
                  className='qrcodescannersectionbtn'
                  disabled={loading}
                  onClick={() => userLogout(navigate, setLoading)}
                >
                  Log Out
                </button>
                <Link to={'/changepassword'}>
                  <button className='qrcodescannersectionbtn'>
                    <span className='resetpasswordlinkspanMobile'>Change Password </span>
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
