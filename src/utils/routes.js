import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import NewPassword from '../app/screens/onBording/NewPassword';
import Login from '../app/screens/onBording/LogIn/index';
import ResetPassword from '../app/screens/onBording/ResetPassword';
import Signup from '../app/screens/onBording/Signup';
import ForgotPassword from '../app/screens/onBording/forgotPassword';
import NotFound from '../app/screens/notfound/NotFound';
import Dashboard from '../app/screens/Dashboard/Dashboard';
import AfterScan from '../app/screens/afterScanPage/AfterScan';
import { GlobalLoader } from '../components/globalLoader';

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
      element: (
        <Suspense fallback={<GlobalLoader />}>
          <Signup />
        </Suspense>
      )
    },
    {
      path: '/login',
      element: (
        <Suspense fallback={<GlobalLoader />}>
          <Login />
        </Suspense>
      )
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
