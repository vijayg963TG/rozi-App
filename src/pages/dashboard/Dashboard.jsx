import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import './Dashboard.css';
import QrReader from 'react-qr-scanner';
import { useState } from 'react';
import Modal from '../../components/modal/Modal';
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
                    delay={100}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '80%', height: '80%' }}
                  />
                </div>
              )}
              {<Modal />}
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
            </div>
            <div className='qrcodescannersection'>
              {<Modal />}
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
