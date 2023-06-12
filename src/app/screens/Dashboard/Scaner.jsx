import React from 'react';
import QrReader from 'react-qr-scanner';
import { Alert } from '../../../utils/Alert';

const Scaner = ({ handleScan }) => {
  const previewStyle = {
    height: 280,
    width: 320
  };

  const handleError = (error) => {
    Alert(2);
    console.log(error);
  };

  return (
    <>
      <QrReader
        delay={500}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        facingMode={'environment'}
        // constraints={{
        //   video: { facingMode: 'environment' }
        // }}
      />
    </>
  );
};

export default Scaner;
