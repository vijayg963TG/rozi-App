import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import './Dashboard.css';
import QrScanner from 'react-qr-scanner';
import { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { setTokenData } from '../../features/slices/loginSlice';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react'
const Dashboard = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [width] = useWindowSize();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleScan = (data) => {
    if (data) {
    navigate('/roziroti/qrscanned')
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  useEffect(() => {
    const token = localStorage.getItem('user_token');
    if (token) {
      try {
        if (token == null) {
          navigate('/login');
          return;
        } else {
          const decodedToken = jwtDecode(token);
          console.log(decodedToken)
          if (decodedToken) {
            if (decodedToken.exp < Date.now()/1000) {
              navigate('/login');
              return;
            } else {
              dispatch(setTokenData(decodedToken));
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

  return (
    <div className='dashboardcontainer'>
      {width <= 768 ? (
        <div>
          <div className='subcontainer'>
            <div className='qrcodescannersectionMobile'>
              <img src='/assets/images/roziroti-logos.jpeg' className='dashboradlogo' />
              <span className='userinformationssectionspanMobile'>Hey User</span>

              {showScanner && (
                <div className='qrreader'>
                  <QrScanner
                    onScan={handleScan}
                    onError={handleError}
                    constraints={{
                      video: { facingMode: 'environment' }
                    }}
                    style={{ width: '95%', height: '95%' }}
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
                </>
              )}
              <div className='resetpasswordlinMobile'>
                <Link to={'/resetpassword'}>
                  {' '}
                  <span className='resetpasswordlinkspanMobile'>Change/Reset Password ! </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='subcontainer'>
            <div className='userinformationssection'>
              <img src='/assets/images/roziroti-logos.jpeg' className='dashboradlogo' />
              <span className='userinformationssectionspan'>Hey User !</span>
              <span>Your User ID</span>
              <div className='resetpasswordlink'>
                <Link to={'/resetpassword'}>
                  {' '}
                  <span className='resetpasswordlinkspan'>Change/Reset Password </span>
                </Link>
              </div>
            </div>
            <div className='qrcodescannersection'>
              {showScanner && (
                <QrScanner
                  // delay={100}
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
