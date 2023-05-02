import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../signup/Signup.css';
import '../login/Login.css';
import InputField from '../../../components/input/InputField';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';

const validate = yup.object().shape({
  email: yup
    .string()
    .email('Email should be required format*')
    .required('Email is a required field*')
});

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: ''
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
          <div className='headerquote'>Forgot Password ?</div>
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

            <Button button={'Verify Email'} />

            <div className='formfooter'>
              <span>{`Return to`}</span>
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

export default ForgotPassword;
