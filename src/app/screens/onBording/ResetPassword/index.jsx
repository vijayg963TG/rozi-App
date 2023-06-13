import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import InputField from '../../../../components/input/InputField';
import Button from '../../../../components/button/Button';
import { resetPasswordValidate } from '../../../../utils/Schema';
import { Link, useNavigate } from 'react-router-dom';
import AuthContainer from '../../../../components/Hoc/authContainer';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { resetPasswordApi } from '../../../../api/resetPasswordApi';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [newpasswordShown, setNewPasswordShown] = useState(false);
  const urlParams = queryString.parse(window.location.search);
  let tokenFromUrl = urlParams.token;
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: ''
    },
    onSubmit: (values, { setFieldError }) => {
      if (values.newPassword !== values.confirmPassword) {
        setFieldError('ConfirmPassword', 'Password must match');
        return;
      }
      dispatch(resetPasswordApi(values, navigate, tokenFromUrl, setLoading));
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
              type={newpasswordShown ? 'text' : 'password'}
              name='newPassword'
              value={formik.values.newPassword}
              label='New Password'
              onBlur={formik.handleBlur}
              placeholder='Please Enter your New Password'
              onChange={formik.handleChange}
              className={
                formik.touched.newPassword && formik.errors.newPassword
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
              <span>{formik.touched.newPassword && formik.errors.newPassword}</span>
            </div>
          </div>
          <div>
            <InputField
              type='text'
              name='confirmPassword'
              label=' Confirm Password'
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              placeholder='Please Enter your Confirm Password'
              onChange={formik.handleChange}
              className={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'InputFieldError'
                  : 'InputField'
              }
            />
            <span className='errorSpan'>
              {formik.touched.confirmPassword && formik.errors.confirmPassword}
            </span>
          </div>
          <div>
            <Button loading={loading} button={'Continue'} />
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

export default ResetPassword;
