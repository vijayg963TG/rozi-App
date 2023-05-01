import React from 'react';
import './Dashboard.css';
import QrReader from 'react-qr-scanner';
import { useState } from 'react';
import Modal from '../../components/modal/Modal';
const MobileDashboard = () => {
  const [result, setResult] = useState('');
  console.log(result);
  const [showScanner, setShowScanner] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
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
              {' '}
              <span className='qrcodescannersectionspanMobile'>
                Click the button below and Scan the QR Code
              </span>
              <button className='qrcodescannersectionbtn' onClick={() => setShowScanner(true)}>
                open the scanner
                <img src='/assets/images/qr-code.gif' className='qrcodescannersectiongif' />
              </button>{' '}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileDashboard;
