import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { cookieManager } from '@shared/lib/cookieManager';
import { setupAuthInterceptors } from '@features/auth/model/auth.interceptor';
import { axiosInstance } from '@shared/api/axios';

export const PrivateRoute: FC = () => {
  const token = cookieManager.getCookie('accessToken');

  setupAuthInterceptors(axiosInstance);

  return token ? <Outlet /> : <Navigate to='/login' />;
};
