import React from 'react';
import './dashboard.css';
import QrScanner from 'react-qr-scanner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../features/slices/loginSlice';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { setData } from '../../../features/slices/dashboardSlice';
import { getTokenFromLS } from '../../../utils/commonFuntion';
import { userScanning } from '../../../api/afterScanApi';
import useWindowSize from '../../../utils/useWindowSize';

const Dashboard = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [width] = useWindowSize();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const correctScanUrl = 'https://qr-code-fronted.vercel.app/roziroti/qrscanned';
  const handleScan = (data) => {
    if (data) {
      if (data.text == correctScanUrl) {
        const token = getTokenFromLS();
        dispatch(setData(data));
        dispatch(userScanning(token));
        navigate('/roziroti/qrscanned');
      } else {
        navigate('/');
      }
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  useEffect(() => {
    const token = getTokenFromLS();
    if (token) {
      try {
        if (token == null) {
          navigate('/login');
          return;
        } else {
          const decodedToken = jwtDecode(token);
          console.log(decodedToken.userId);
          if (decodedToken) {
            if (decodedToken.exp < Date.now() / 1000) {
              navigate('/login');
              return;
            } else {
              dispatch(setUser(decodedToken));
            }
          } else {
            navigate('/login');
          }
        }
      } catch (error) {
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, []);
  const userName = localStorage.getItem('userdata');
  return (
    <div className='dashboardcontainer'>
      {width <= 768 ? (
        <div>
          <div className='subcontainer'>
            <div className='qrcodescannersectionMobile'>
              <img src='/assets/images/roziroti-logos.jpeg' className='dashboradlogo' />
              <span className='userinformationssectionspanMobile'>Hey {userName}</span>

              {showScanner && (
                <div className='qrreader'>
                  <QrScanner
                    onScan={handleScan}
                    onError={handleError}
                    constraints={{
                      video: { facingMode: 'environment' }
                    }}
                    style={{ width: '90%', height: '90%' }}
                  />
                </div>
              )}

              {showScanner === false && (
                <>
                  <span className='qrcodescannersectionspanMobile'>
                    Click the button below and Scan the QR Code
                  </span>
                  <button className='qrcodescannersectionbtn' onClick={() => setShowScanner(true)}>
                    open the scanner
                    <img src='/assets/images/qr-code.gif' className='qrcodescannersectiongif' />
                  </button>

                  <button
                    onClick={() => {
                      localStorage.clear();
                      navigate('/login');
                    }}
                  >
                    Log Out
                  </button>
                </>
              )}
              <div className='resetpasswordlinMobile'>
                {/* <Link to={'/resetpassword'}>
                  {' '}
                  <span className='resetpasswordlinkspanMobile'>Change/Reset Password ! </span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='subcontainer'>
            <div className='userinformationssection'>
              <img src='/assets/images/roziroti-logos.jpeg' className='dashboradlogo' />
              <span className='userinformationssectionspan'>Hey {userName}</span>
              <div className='resetpasswordlink'>
                {/* <Link to={'/resetpassword'}>
                  {' '}
                  <span className='resetpasswordlinkspan'>Change/Reset Password </span>
                </Link> */}
              </div>
            </div>
            <div className='qrcodescannersection'>
              {showScanner && (
                <QrScanner
                  onError={handleError}
                  onScan={handleScan}
                  constraints={{
                    video: { facingMode: 'environment' }
                  }}
                  style={{ width: '80%', height: '80%' }}
                />
              )}
              {showScanner === false && (
                <>
                  <span className='qrcodescannersectionspan'>
                    Click the button below and Scan the QR Code
                  </span>
                  <button className='qrcodescannersectionbtn' onClick={() => setShowScanner(true)}>
                    open the scanner
                    <img src='/assets/images/qr-code.gif' className='qrcodescannersectiongif' />
                  </button>
                  <button
                    onClick={() => {
                      localStorage.clear();
                      navigate('/login');
                    }}
                  >
                    Log Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
