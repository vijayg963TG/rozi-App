import React, { useState } from 'react';
import { useFormik } from 'formik';
import Button from '../../../../components/button/Button';
import InputField from '../../../../components/input/InputField';
import { Link } from 'react-router-dom';
import { forgotValidate } from '../../../../utils/Schema';
import AuthContainer from '../../../../components/Hoc/authContainer';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../../../api/forgotPasswordApi';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [waitRes, setWaitRes] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: (values) => {
      dispatch(forgotPassword(values, setWaitRes));
    },
    validateOnChange: true,
    validationSchema: forgotValidate
  });

  return (
    <AuthContainer>
      <form onSubmit={formik.handleSubmit} className='form'>
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

            <Button loading={waitRes} button={'Verify Email'} />

            <div className='formfooter'>
              <span>{`Return to`}</span>
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

export default ForgotPassword;
