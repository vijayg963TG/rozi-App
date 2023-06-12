import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import ChangePassword from '../app/screens/onBording/ChangePassword';
import Login from '../app/screens/onBording/LogIn/index';
import ResetPassword from '../app/screens/onBording/ResetPassword';
import Signup from '../app/screens/onBording/Signup';
import NotFound from '../app/screens/notfound/NotFound';
import Dashboard from '../app/screens/Dashboard/Dashboard';
import AfterScan from '../app/screens/afterScanPage/AfterScan';
import { GlobalLoader } from '../components/globalLoader';
import ForgotPassword from '../app/screens/onBording/ForgotPassword';

const Routes = () => {
  const content = useRoutes([
    {
      path: '/',
      element: <Suspense fallback={<GlobalLoader />}>{<Dashboard />}</Suspense>
    },
    {
      path: '/roziroti/qrscanned',
      element: <Suspense fallback={<GlobalLoader />}>{<AfterScan />}</Suspense>
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
      path: '/changepassword',
      element: <ChangePassword />
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
