import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import InputField from '../../../../components/input/InputField';
import Button from '../../../../components/button/Button';
import { resetPasswordValidate } from '../../../../utils/Schema';
import { Link } from 'react-router-dom';
import AuthContainer from '../../../../components/Hoc/authContainer';

const ResetPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [newpasswordShown, setNewPasswordShown] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: '',
      newpassword: '',
      confirmnewpassword: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: true,
    validationSchema: resetPasswordValidate
  });
  return (
    <AuthContainer>
      <form onSubmit={formik.handleSubmit} className='form'>
        <div className='formHeader'>
          <div>
            <img src='/assets/images/roziroti-logos.jpeg' className='logo' />
          </div>
          <div className='headerquote'>Reset Password !</div>
        </div>
        <div className='inputcontainer'>
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
              <img
                src={`/assets/icons${passwordShown ? '/eye.png' : '/password.svg'}`}
                className='passwordIcon'
                onClick={() => setPasswordShown(!passwordShown)}
                role='showpassword'
              />
            </span>

            <div className='errorSpan'>
              <span>{formik.touched.password && formik.errors.password}</span>
            </div>
          </div>
          <div className='passwordInput'>
            <InputField
              type={newpasswordShown ? 'text' : 'password'}
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
              <img
                src={`/assets/icons${newpasswordShown ? '/eye.png' : '/password.svg'}`}
                className='passwordIcon'
                onClick={() => setNewPasswordShown(!newpasswordShown)}
                role='showpassword'
              />
            </span>

            <div className='errorSpan'>
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

export default ResetPassword;
