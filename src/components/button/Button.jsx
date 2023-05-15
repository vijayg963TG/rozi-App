import React from 'react';
import './Button.css';
import Icon from '../Icon/Icon';
const Button = ({ button, loading }) => {
  return (
    <div className='btncontainer'>
      <button type='submit' className='btn'>
        {loading ? (
          <>
            <span>Loading</span> <Icon name='loader' size={'32px'} class='loader' />
          </>
        ) : (
          button
        )}
      </button>
    </div>
  );
};

export default Button;
