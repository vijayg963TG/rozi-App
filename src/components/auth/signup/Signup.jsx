import React from 'react';
import InputField from '../../input/InputField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Signup.css';
import { passwordpattern } from '../../../utils/pattern';
import { useState } from 'react';
import Button from '../../button/Button';

const validate = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name*')
    .min(3)
    .max(12)
    .required(' This is a Required field*'),
  lastname: yup
    .string()
    .min(3)
    .max(12)
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name*')
    .required('This is a Required field*'),
  email: yup
    .string()
    .email('email should be required format*')
    .required('Email is a required field*'),
  password: yup
    .string()
    .min(6, 'Password should contain atleast 6 characters*')
    .matches(passwordpattern, 'Password must be strong*')
    .required('Password is a required field*'),
  mobile_number: yup
    .string()
    .max(10, 'Mobile number should be of 10 digits')
    .min(10, 'Mobile number should be of 10 digits')
    .matches(/^[0-9]+$/, 'Mobile number must be numeric')
    .required('This is a required field*'),

  confirmnewpassword: yup
    .string()
    .when('password', {
      is: (value) => (value || value > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Please retype your password. They do not match*')
    })
    .required('This is a required fields*')
});

const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmnewpassword: '',
      firstname: '',
      lastname: '',
      emailOtp: '',
      mobile_number: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: true,
    validationSchema: validate
  });
  const handleKeyPress = (e) => {
    if (e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 107 || e.keyCode === 189) {
      // keyCode 69 represents the letter "e"
      // keycode 190 represents the dot(.)
      e.preventDefault();
    }
  };

  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit} className='form'>
        <div className='formHeader'>
          <div>
            <img src='/assets/images/roziroti-logos.jpeg' className='logo' />
          </div>
          <div className='headerquote'>We believe in Serving the best to our Customer !</div>
        </div>
        <div className='inputcontainer'>
          <div>
            <InputField
              type='text'
              name='firstname'
              label='First Name'
              role='FirstName'
              value={formik.values.firstname}
              onBlur={formik.handleBlur}
              placeholder='First Name'
              onChange={formik.handleChange}
              className={
                formik.touched.firstname && formik.errors.firstname
                  ? 'InputFieldError'
                  : 'InputField'
              }
            />
            <span className='errorSpan'>{formik.touched.firstname && formik.errors.firstname}</span>
          </div>
          <div>
            <InputField
              type='text'
              name='lastname'
              label='Last Name'
              role='lastname'
              value={formik.values.lastname}
              onBlur={formik.handleBlur}
              placeholder='First Name'
              onChange={formik.handleChange}
              className={
                formik.touched.lastname && formik.errors.lastname ? 'InputFieldError' : 'InputField'
              }
            />
            <span className='errorSpan'>{formik.touched.lastname && formik.errors.lastname}</span>
          </div>
          <div>
            <InputField
              type='number'
              name='mobile_number'
              label='Mobile Number'
              role='mobile_number'
              value={formik.values.mobile_number}
              onBlur={formik.handleBlur}
              placeholder='Please Enter your Mobile Number'
              onChange={formik.handleChange}
              className={
                formik.touched.mobile_number && formik.errors.mobile_number
                  ? 'InputFieldError'
                  : 'InputField'
              }
              onKeyDown={handleKeyPress}
            />
            <span className='errorSpan'>
              {formik.touched.mobile_number && formik.errors.mobile_number}
            </span>
          </div>
          <div>
            <InputField
              type='text'
              name='email'
              label='Email'
              role='email'
              value={formik.values.email}
              onBlur={formik.handleBlur}
              placeholder='Please Enter your Email'
              onChange={formik.handleChange}
              className={
                formik.touched.email && formik.errors.email ? 'InputFieldError' : 'InputField'
              }
            />
            <span className='errorSpan'>{formik.touched.email && formik.errors.email}</span>
          </div>
          <div className='passwordInput'>
            <InputField
              type={passwordShown ? 'text' : 'password'}
              name='password'
              value={formik.values.password}
              label='Password'
              onBlur={formik.handleBlur}
              placeholder='Please Enter your Password'
              onChange={formik.handleChange}
              className={
                formik.touched.password && formik.errors.password ? 'InputFieldError' : 'InputField'
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
            <span className='errorSpan'>{formik.touched.password && formik.errors.password}</span>
          </div>
          <div className='passwordInput'>
            <InputField
              type='password'
              name='confirmnewpassword'
              label='Confirm Password'
              placeholder={'Confirm New Password'}
              value={formik.values.confirmnewpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.confirmnewpassword && formik.errors.confirmnewpassword
                  ? 'InputFieldError'
                  : 'InputField'
              }
            />
            <span className='errorSpan'>
              {formik.touched.confirmnewpassword && formik.errors.confirmnewpassword}
            </span>

            <Button button={'Signup'} role='Submit' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
