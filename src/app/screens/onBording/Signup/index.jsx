import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from '../../../../api/userSignUpApi';
import Button from '../../../../components/button/Button';
import InputField from '../../../../components/input/InputField';
import { signUpValidate } from '../../../../utils/Schema';
import AuthContainer from '../../../../components/Hoc/authContainer';

const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const dispatch = useDispatch();
  const { loading, error, successMessage, statusCode } = useSelector((state) => state.signup);

  const disableInput = statusCode == 200 ? true : false;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      companyname: '',
      confirmpassword: '',
      firstname: '',
      lastname: '',
      mobileNumber: ''
    },
    onSubmit: (values) => {
      dispatch(userSignup(values));
      console.log(values);
    },
    validateOnChange: true,
    validationSchema: signUpValidate
  });
  const handleKeyPress = (e) => {
    if (e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 107 || e.keyCode === 189) {
      // keyCode 69 represents the letter "e"
      // keycode 190 represents the dot(.)
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
              disable={disableInput}
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
              disable={disableInput}
            />
            <span className='errorSpan'>{formik.touched.lastname && formik.errors.lastname}</span>
          </div>
          <div>
            <InputField
              type='text'
              name='companyname'
              label='Company Name'
              value={formik.values.companyname}
              onBlur={formik.handleBlur}
              placeholder='Please Enter your Company Name'
              onChange={formik.handleChange}
              className={
                formik.touched.companyname && formik.errors.companyname
                  ? 'InputFieldError'
                  : 'InputField'
              }
              disable={disableInput}
            />
            <span className='errorSpan'>
              {formik.touched.companyname && formik.errors.companyname}
            </span>
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
              disable={disableInput}
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
              <span>{formik.touched.password && formik.errors.password}</span>
            </div>
          </div>
          <div className='passwordInput'>
            <InputField
              type='password'
              name='confirmpassword'
              label='Confirm Password'
              placeholder={'Confirm New Password'}
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.confirmpassword && formik.errors.confirmpassword
                  ? 'InputFieldError'
                  : 'InputField'
              }
              disable={disableInput}
            />
            <span className='errorSpan'>
              {formik.touched.confirmpassword && formik.errors.confirmpassword}
            </span>
          </div>
          <Button button={'Signup'} loading={loading} />
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
                  <span className='formfooterlinkspan'>Sign in instead</span>
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
