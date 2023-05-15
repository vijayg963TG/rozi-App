import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../signup/Signup.css';
import './Login.css';
import { useState } from 'react';
import InputField from '../../../components/input/InputField';
import Button from '../../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../../api/userLoginAPi';
import { useEffect } from 'react';

const validate = yup.object().shape({
  email: yup
    .string()
    .email('email should be required format*')
    .required('Email is a required field*'),
  password: yup
    .string()
    .min(6, 'Password must be of atleast 6 characters*')
    .required('This is a required field*')
});

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);    
  };
  const dispatch = useDispatch()
  const {loading,error,statusCode} = useSelector((state)=>state.login)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      dispatch(userLogin(values))
    },
    validateOnChange: true,
    validationSchema: validate
  });
  const navigate = useNavigate()
useEffect(()=>{
if (statusCode == 200) {
navigate('/')
}
else{
  return
}
},[navigate,statusCode])
  return (
    <div className='logincontainer'>
      <form onSubmit={formik.handleSubmit} className='loginform'>
        <div className='formHeader'>
          <div>
            <img src='/assets/images/roziroti-logos.jpeg' className='logo' />
          </div>
          <div className='headerquote'>Login Here !</div>
        </div>
        <div className='inputcontainer'>
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
            <div className='forgetusername'>
              <Link to='/forgotpassword'>
                <span className='forgetusernamespan'> Forget Password </span>
              </Link>
            </div>
            </div>
            <Button button={'Login'} loading={loading}/>
            <div>
            {
              error &&<div className='errormessage'>
                {
                  error
                }
                </div>
            }
            </div>
            <div className='formfooter'>
              <span>{`Don't have an account ?`}</span>
              <Link to='/signup'>
                <span className='formfooterlinkspan'>Sign up</span>
              </Link>
            </div>
         
        </div>
      </form>
    </div>
  );
};

export default Login;
