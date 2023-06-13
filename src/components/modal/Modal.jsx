import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Modal.css';
import { getTokenFromLS } from '../../utils/commonFuntion';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../features/slices/afterScanSlice';

export default function Modal() {
  const [modal, setModal] = useState(true);
  const dispatch = useDispatch();
  const toggleModal = () => {
    setModal(!modal);
  };
  const user = getTokenFromLS();
  useEffect(() => {
    if (user != null) {
      setTimeout(() => {
        dispatch(setShowModal());
      }, 5000);
    }
  }, [user]);

  return (
    <>
      {modal && (
        <div className='modal'>
          <div className='overlay'></div>
          <div className='modal-content'>
            <div>
              {/* <p className='errortext'>You can only scan once a day</p> */}
              <button className='close-modal' onClick={toggleModal}>
                CLOSE
              </button>
            </div>
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
          </div>
        </div>
      )}
    </>
  );
}
