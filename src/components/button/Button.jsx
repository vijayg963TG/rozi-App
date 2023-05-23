import React from 'react';
import './Button.css';
import Icon from '../Icon/Icon';
const Button = ({ button, loading }) => {
  return (
    <div className='btncontainer'>
      <button type='submit' className='btn' disabled={loading}>
        {loading ? (
          <>
            <span></span> <Icon name='loader' size={'45px'} class='loader' />
          </>
        ) : (
          button
        )}
      </button>
    </div>
  );
};

export default Button;
