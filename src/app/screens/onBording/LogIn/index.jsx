import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { loginValidate } from '../../../../utils/Schema';
import Button from '../../../../components/button/Button';
import InputField from '../../../../components/input/InputField';
import { userLogin } from '../../../../api/userLoginAPi';
import AuthContainer from '../../../../components/Hoc/authContainer/index';
import { getTokenFromLS } from '../../../../utils/commonFuntion';

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.login);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      dispatch(userLogin(values, navigate));
    },
    validateOnChange: true,
    validationSchema: loginValidate
  });

  useEffect(() => {
    let token = getTokenFromLS();
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken && decodedToken.exp > Date.now() / 1000) {
          navigate('/');
        }
      } catch (error) {
        navigate('/login');
      }
    }
  }, []);
  return (
    <AuthContainer>
      <form onSubmit={formik.handleSubmit} className='form'>
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
              disable={loading}
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
              disable={loading}
            />
            <span className='passwordIconSpan'>
              <img
                src={`/assets/icons${passwordShown ? '/eye.png' : '/password.svg'}`}
                className='passwordIcon'
                onClick={() => setPasswordShown(!passwordShown)}
                role='showpassword'
              />
            </span>
            <span className='errorSpan'>{formik.touched.password && formik.errors.password}</span>
            <div className='forgetusername'>
              <Link to='/forgotpassword'>
                <span className='forgetusernamespan'> Forget Password </span>
              </Link>
            </div>
          </div>
          <Button button={'Login'} loading={loading} />
          <div>{error && <div className='errormessage'>{error.message}</div>}</div>
          <div className='formfooter'>
            <span>{`Don't have an account ?`}</span>
            <Link to='/signup'>
              <span className='formfooterlinkspan'>Sign up</span>
            </Link>
          </div>
        </div>
      </form>
    </AuthContainer>
  );
};

export default Login;
