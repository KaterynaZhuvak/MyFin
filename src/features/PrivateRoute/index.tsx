import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { cookieManager } from '@shared/lib/cookieManager';

export const PrivateRoute: FC = () => {
  const token = cookieManager.getCookie('accessToken');

  return token ? <Outlet /> : <Navigate to='/login' />;
};
