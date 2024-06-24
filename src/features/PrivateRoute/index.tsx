import type { FC, ReactNode } from 'react';
import { Route, Navigate } from 'react-router';
import { cookieManager } from '@shared/lib/cookieManager';

interface RouteProps {
  component: ReactNode;
  path: string;
}

export const PrivateRoute: FC<RouteProps> = ({ component, path }) => {
  const token = cookieManager.getCookie('accessToken');

  if (!token) {
    return <Navigate to='/login' replace />;
  }

  return <Route path={path} element={component} />;
};
