import React from 'react';
import { useRoutes } from 'react-router-dom';

import Signup from '../components/auth/signup/Signup';
import Dashboard from '../pages/Dashboard';
const Routes = () => {
  const content = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ]);
  return content;
};
export default Routes;
