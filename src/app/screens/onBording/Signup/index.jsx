import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from '../../../../api/userSignUpApi';
import Button from '../../../../components/button/Button';
import InputField from '../../../../components/input/InputField';
import { signUpValidate } from '../../../../utils/Schema';
import AuthContainer from '../../../../components/Hoc/authContainer';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const { loading, error, successMessage, statusCode } = useSelector((state) => state.signup);

  const disableInput = statusCode == 200 ? true : false;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      companyName: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      mobileNumber: ''
    },
    onSubmit: (values) => {
      dispatch(userSignup(values, navigate));
    },
    validateOnChange: true,
    validationSchema: signUpValidate
  });
  const handleKeyPress = (e) => {
    if (e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 107 || e.keyCode === 189) {
      e.preventDefault();
    }
  };

  formik.values.mobileNumber = formik.values.mobileNumber.toString();
  return (
    <AuthContainer>
      <form onSubmit={formik.handleSubmit} className='form'>
        <div className='formHeader'>
          <div>
            <img src='/assets/images/roziroti-logos.jpeg' className='logo' />
          </div>
          <div className='headerquote'>We believe in Serving the best to our Customers !</div>
        </div>
        <div className='inputcontainer'>
          <div>
            <InputField
              type='text'
              name='firstName'
              label='First Name'
              role='firstName'
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              placeholder='First Name'
              onChange={formik.handleChange}
              className={
                formik.touched.firstName && formik.errors.firstName
                  ? 'InputFieldError'
                  : 'InputField'
              }
              disable={disableInput}
            />
            <span className='errorSpan'>{formik.touched.firstName && formik.errors.firstName}</span>
          </div>
          <div>
            <InputField
              type='text'
              name='lastName'
              label='Last Name'
              role='lastName'
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              placeholder='First Name'
              onChange={formik.handleChange}
              className={
                formik.touched.lastName && formik.errors.lastName ? 'InputFieldError' : 'InputField'
              }
              disable={disableInput}
            />
            <span className='errorSpan'>{formik.touched.lastName && formik.errors.lastName}</span>
          </div>
          <div>
            <InputField
              type='text'
              name='companyName'
              label='Company Name'
              value={formik.values.companyName}
              onBlur={formik.handleBlur}
              placeholder='Please Enter your Company Name'
              onChange={formik.handleChange}
              className={
                formik.touched.companyName && formik.errors.companyName
                  ? 'InputFieldError'
                  : 'InputField'
              }
              disable={disableInput}
            />
            <span className='errorSpan'>
              {formik.touched.companyName && formik.errors.companyName}
            </span>
          </div>
          <div>
            <InputField
              type='number'
              name='mobileNumber'
              label='Mobile Number'
              role='mobileNumber'
              value={formik.values.mobileNumber}
              onBlur={formik.handleBlur}
              placeholder='Please Enter your Mobile Number'
              onChange={formik.handleChange}
              className={
                formik.touched.mobileNumber && formik.errors.mobileNumber
                  ? 'InputFieldError'
                  : 'InputField'
              }
              disable={disableInput}
              onKeyDown={handleKeyPress}
            />
            <span className='errorSpan'>
              {formik.touched.mobileNumber && formik.errors.mobileNumber}
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
              disable={disableInput}
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
              disable={disableInput}
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
              type='password'
              name='confirmPassword'
              label='Confirm Password'
              placeholder={'Confirm New Password'}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'InputFieldError'
                  : 'InputField'
              }
              disable={disableInput}
            />
            <span className='errorSpan'>
              {formik.touched.confirmPassword && formik.errors.confirmPassword}
            </span>
          </div>
          <span onClick={() => formik.handleSubmit()}>
            <Button button={'Create Account'} loading={loading} />
          </span>
          <div>
            {successMessage && !error && <div className='successmessage'>{successMessage}</div>}
            {error && <div className='errormessage'>{error}</div>}
          </div>
          <div className='formfooter'>
            {statusCode == 200 ? (
              <Link to='/login'>
                <span className='formfooterlinkspan'>Sign in to continue</span>
              </Link>
            ) : (
              <>
                Already have an account ?
                <Link to='/login'>
                  <span className='formfooterlinkspan'>Sign in</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </form>
    </AuthContainer>
  );
};

export default Signup;
