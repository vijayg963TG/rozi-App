import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../../../../components/input/InputField';
import Button from '../../../../components/button/Button';
import { newPasswordValidate } from '../../../../utils/Schema';
import AuthContainer from '../../../../components/Hoc/authContainer';

const NewPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const formik = useFormik({
    initialValues: {
      newpassword: '',
      confirmnewpassword: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: true,
    validationSchema: newPasswordValidate
  });

  return (
    <AuthContainer>
      <form onSubmit={formik.handleSubmit} className='form'>
        <div className='formHeader'>
          <div>
            <img src='/assets/images/roziroti-logos.jpeg' className='logo' />
          </div>
          <div className='headerquote'>Setup New Password !</div>
        </div>
        <div className='inputcontainer'>
          <div className='passwordInput'>
            <InputField
              type={passwordShown ? 'text' : 'password'}
              name='newpassword'
              value={formik.values.newpassword}
              label='New Password'
              onBlur={formik.handleBlur}
              placeholder='Please Enter your New Password'
              onChange={formik.handleChange}
              className={
                formik.touched.newpassword && formik.errors.newpassword
                  ? 'InputFieldError'
                  : 'InputField'
              }
            />
            <span className='passwordIconSpan'>
              {passwordShown ? (
                <img
                  src='/assets/icons/eye.png'
                  className='passwordIcon'
                  onClick={togglePasswordVisiblity}
                  role='showpassword'
                />
              ) : (
                <img
                  src='/assets/icons/password.svg'
                  className='passwordIcon'
                  onClick={togglePasswordVisiblity}
                  role='hidepassword'
                />
              )}
            </span>

            <div className='errorSpan'>
              {' '}
              <span>{formik.touched.newpassword && formik.errors.newpassword}</span>
            </div>
          </div>
          <div>
            <InputField
              type='password'
              name='confirmnewpassword'
              label=' Confirm Password'
              value={formik.values.confirmnewpassword}
              onBlur={formik.handleBlur}
              placeholder='Please Enter your New Password'
              onChange={formik.handleChange}
              className={
                formik.touched.confirmnewpassword && formik.errors.confirmnewpassword
                  ? 'InputFieldError'
                  : 'InputField'
              }
            />
            <span className='errorSpan'>
              {formik.touched.confirmnewpassword && formik.errors.confirmnewpassword}
            </span>
          </div>
          <div>
            <Button button={'Continue'} />
            <div className='formfooter'>
              <span>{`Return to `}</span>
              <Link to='/login'>
                <span className='formfooterlinkspan'>Sign in</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </AuthContainer>
  );
};

export default NewPassword;
