import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../../../components/input/InputField';
import Button from '../../../../components/button/Button';
import { changePasswordValidate } from '../../../../utils/Schema';
import AuthContainer from '../../../../components/Hoc/authContainer';
import { useDispatch } from 'react-redux';
import { resetPasswordApi } from '../../../../api/changePasswordApi';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    onSubmit: (values, { setFieldError }) => {
      if (values.newPassword !== values.confirmPassword) {
        setFieldError('ConfirmPassword', 'Password must match');
        return;
      }
      dispatch(resetPasswordApi(values, navigate, setLoading));
    },
    validateOnChange: true,
    validationSchema: changePasswordValidate
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
              type={'password'}
              name='oldPassword'
              value={formik.values.oldPassword}
              label='Old Password'
              onBlur={formik.handleBlur}
              placeholder='Please Enter your last Password'
              onChange={formik.handleChange}
              className={
                formik.touched.oldPassword && formik.errors.oldPassword
                  ? 'InputFieldError'
                  : 'InputField'
              }
            />
            {/* <span className='passwordIconSpan'>
              <img
                src={`/assets/icons${'/password.svg'}`}
                className='passwordIcon'
                // onClick={() => setPasswordShown(!passwordShown)}
                role='showpassword'
              />
            </span> */}

            <div className='errorSpan'>
              <span>{formik.touched.oldPassword && formik.errors.oldPassword}</span>
            </div>
          </div>
          <div className='passwordInput'>
            <InputField
              type={passwordShown ? 'text' : 'password'}
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
                src={`/assets/icons${passwordShown ? '/eye.png' : '/password.svg'}`}
                className='passwordIcon'
                onClick={() => setPasswordShown(!passwordShown)}
                role='showpassword'
              />
            </span>

            <div className='errorSpan'>
              <span>{formik.touched.newPassword && formik.errors.newPassword}</span>
            </div>
          </div>
          <div>
            <InputField
              type='password'
              name='confirmPassword'
              label=' Confirm Password'
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              placeholder='Please confirm your Password'
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

export default ChangePassword;
