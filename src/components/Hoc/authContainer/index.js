import React from 'react';
import './authConatiner.css';

const AuthContainer = (props) => {
  const { children } = props;
  return <div className='container'>{children}</div>;
};

export default React.memo(AuthContainer);
