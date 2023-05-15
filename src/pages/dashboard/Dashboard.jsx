import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import './Dashboard.css';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

const Dashboard = () => {
  const [result, setResult] = useState('');
  console.log(result);
  const [showScanner, setShowScanner] = useState(false);
  const [width] = useWindowSize();
  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  // useEffect(() => {
  //   const token = localStorage.getItem('beast_usertoken');
  //   if (token) {
  //     try {
  //       if (token == null) {
  //         navigate('/login');
  //         return;
  //       } else {
  //         const decodedToken = jwtDecode(token);
  //         if (decodedToken) {
  //           if (decodedToken.exp * 1000 > Date.now()) {
  //             dispatch(setClearData());
  //             navigate('/login');
  //             return;
  //           } else {
  //             dispatch(setTokenData(decodedToken));
  //           }
  //         } else {
  //           navigate('/login');
  //         }
  //       }
  //     } catch (error) {
  //       navigate('/login');
  //     }
  //   } else {
  //     navigate('/login');
  //   }
  // }, []);
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
                  <QrReader
                    facingMode={'environment'}
                    delay={100}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '80%', height: '80%' }}
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
                <QrReader
                  delay={100}
                  onError={handleError}
                  onScan={handleScan}
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
