import React from 'react';
import { useRoutes } from 'react-router-dom';
import ForgotPassword from '../pages/auth/forgotPassword/ForgotPassword';
import NewPassword from '../pages/auth/forgotPassword/NewPassword';
import Login from '../pages/auth/login/Login';
import Signup from '../pages/auth/signup/Signup';
import NotFound from '../components/notfound/NotFound';
import Dashboard from '../pages/dashboard/Dashboard';
import AfterScan from '../pages/afterScanPage/AfterScan';
import ResetPassword from '../pages/auth/forgotPassword/ResetPassword';

const Routes = () => {
  const content = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/forgotpassword',
      element: <ForgotPassword />
    },
    {
      path: '/newpassword',
      element: <NewPassword />
    },
    {
      path: '/roziroti/qrscanned',
      element: <AfterScan />
    },
    {
      path: '/resetpassword',
      element: <ResetPassword />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);
  return content;
};
export default Routes;
