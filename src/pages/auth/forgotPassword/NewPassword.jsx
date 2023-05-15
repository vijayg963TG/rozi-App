import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../signup/Signup.css';
import '../login/Login.css';
import { useState } from 'react';
import InputField from '../../../components/input/InputField';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import { passwordpattern } from '../../../utils/pattern';

const validate = yup.object().shape({
  newpassword: yup
    .string()
    .matches(
      passwordpattern,
      'Password must be strong must contain a special character a digit a uppercase and lowercase letter *'
    )
    .min(6, 'Password should contain atleast 6 characters*')
    .required('This is a required field*'),
  confirmnewpassword: yup
    .string()
    .when('newpassword', {
      is: (value) => (value || value > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Please retype your password. They do not match*')
    })
    .required('This is a required fields*')
});

const NewPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
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
    validationSchema: validate
  });

  return (
    <div className='logincontainer'>
      <form onSubmit={formik.handleSubmit} className='loginform'>
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
              placeholder='Please Enter your newpassword'
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
              type='text'
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
    </div>
  );
};

export default NewPassword;
