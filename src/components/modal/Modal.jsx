import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './Modal.css';
export default function Modal({ loading, error, }) {
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
  return (
    <>
      {modal && (
        <div className='modal'>
          <div className='overlay'>
            {loading && (
              <div className='modalloader'>
                <Icon name='loader' size='200px' />
              </div>
            )}
          </div>
          {!loading && (
            <div className='modal-content'>
              {
                error ? <> <Icon name='cancel' size={'60px'} /> <p className='errortext'>
                  You can only scan once a day Press
                  <Link to='/'>
                    <span className='okspanerror'>OK</span>
                  </Link>
                  to go to home page or you will be automatically redirected
                </p>
                  <button className='close-modal' onClick={toggleModal}>
                    CLOSE
                  </button> </> : <> <img src='/assets/images/success2.gif' className='successgif' /> <p className='successtext'>
                    You are Successfully Identified Press
                    <Link to='/'>
                      <span className='okspan'>OK</span>
                    </Link>
                    to go to home page or you will be automatically redirected
                  </p>
                  <button className='close-modal' onClick={toggleModal}>
                    CLOSE
                  </button></>

              }
            </div>
          )}
        </div>
      )}
    </>
  );
}
