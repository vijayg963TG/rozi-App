import React from 'react';
import { useRoutes } from 'react-router-dom';
import NewPassword from '../app/screens/onBording/NewPassword';
import Login from '../app/screens/onBording/LogIn/index';
import NotFound from '../pages/notfound/NotFound';
import Dashboard from '../pages/dashboard/Dashboard';
import AfterScan from '../pages/afterScanPage/AfterScan';
import ResetPassword from '../app/screens/onBording/ResetPassword';
import Signup from '../app/screens/onBording/Signup';
import ForgotPassword from '../app/screens/onBording/ForgotPassword';

const Routes = () => {
  const content = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/roziroti/qrscanned',
      element: <AfterScan />
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
