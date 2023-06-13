import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Modal.css';
import { getTokenFromLS } from '../../utils/commonFuntion';

export default function Modal() {
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  const toggleModal = () => {
    setModal(!modal);
  };
  const user = getTokenFromLS();
  useEffect(() => {
    if (user != null) {
      setTimeout(() => {
        navigate('/');
      }, 8000);
    }
  }, [user]);
  return (
    <>
      {modal && (
        <div className='modal'>
          <div className='overlay'>
            {/* {loading && (
              <div className='modalloader'>
                <Icon name='loader' size='200px' />
              </div>
            )} */}
          </div>
          {/* {!loading && ( */}
          <div className='modal-content'>
            {/* {error && ( */}
            <div>
              {/* <Icon name='cancel' size={'60px'} />{' '} */}
              <p className='errortext'>You can only scan once a day</p>
              <button className='close-modal' onClick={toggleModal}>
                CLOSE
              </button>
            </div>
            {/* )} */}
            {/* {user != null && ( */}
            <div>
              <img src='/assets/images/success2.gif' className='successgif' />{' '}
              <p className='successtext'>
                You are Successfully Identified Press
                <Link to='/'>
                  <span className='okspan'>OK</span>
                </Link>
                to go to home page or you will be automatically redirected
              </p>
              <button className='close-modal' onClick={toggleModal}>
                CLOSE
              </button>
            </div>
            {/* )} */}
          </div>
          {/* )} */}
        </div>
      )}
    </>
  );
}
