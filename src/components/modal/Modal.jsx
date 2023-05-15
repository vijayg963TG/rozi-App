import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './Modal.css';
export default function Modal() {
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  const toggleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 7000);
  });
  const loading = false;
  return (
    <>
      {modal && (
        <div className='modal'>
          <div className='overlay'>
            {loading && (
              <div className='loader'>
                <Icon name='loader' size='200px' />
              </div>
            )}
          </div>
          {!loading && (
            <div className='modal-content'>
              <img src='/assets/images/success2.gif' className='successgif' />
              <p className='successtext'>
                You are Successfully Identified Press{' '}
                <Link to='/'>
                  <span className='okspan'>OK</span>
                </Link>
                to go to home page or you will be automatically redirected
              </p>
              <button className='close-modal' onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
