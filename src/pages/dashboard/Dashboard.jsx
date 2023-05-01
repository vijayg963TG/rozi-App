import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import './Dashboard.css';
import QrReader from 'react-qr-scanner';
import { useState } from 'react';
import MobileDashboard from './MobileDashBoard';
import Modal from '../../components/modal/Modal';
MobileDashboard;
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
        <MobileDashboard />
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
