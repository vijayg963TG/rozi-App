import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Modal.css';
export default function Modal() {
  const [modal, setModal] = useState(true);
const navigate  = useNavigate()
  const toggleModal = () => {
    setModal(!modal);
  };
  useEffect(()=>{
    setTimeout(() => {
      navigate('/')
    }, 7000);
  })
  return (
    <>
      {modal && (
        <div className='modal'>
          <div  className='overlay'></div>
          <div className='modal-content'>
            <img src='/assets/images/success2.gif' className='successgif' />
            <p className='successtext'>You are Successfully Identified Press <Link to='/'> <span className='okspan'>OK</span></Link> to go to home page or you will be automatically redirected</p>
            <button className='close-modal' onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
