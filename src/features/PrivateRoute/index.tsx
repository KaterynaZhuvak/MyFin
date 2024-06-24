import type { ComponentType, FC } from 'react';
import { Navigate } from 'react-router';
import { cookieManager } from '@shared/lib/cookieManager';

interface RouteProps {
  component: ComponentType;
}

export const PrivateRoute: FC<RouteProps> = ({ component: RouteComponent }) => {
  const token = cookieManager.getCookie('accessToken');

  if (!token) {
    return <Navigate to='/login' replace />;
  }

  return <RouteComponent />;
};
