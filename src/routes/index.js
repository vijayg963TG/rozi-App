import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '../components/auth/login/Login';
import Signup from '../components/auth/signup/Signup';
import NotFound from '../components/notfound/NotFound';
import Dashboard from '../pages/dashboard/Dashboard';

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
      path: '*',
      element: <NotFound />
    }
  ]);
  return content;
};
export default Routes;
