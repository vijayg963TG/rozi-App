import React from 'react';
import './Button.css';
const Button = ({ button }) => {
  return (
    <div className='btncontainer'>
      <button type='submit' className='btn'>
        {button}
      </button>
    </div>
  );
};

export default Button;
