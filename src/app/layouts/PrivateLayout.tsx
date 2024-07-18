import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { cookieManager } from '@shared/lib/cookieManager';
import { setupAuthInterceptors } from '@features/auth/model/auth.interceptor';
import { axiosInstance } from '@shared/api/axios';
import { Sidebar } from '@widgets/Sidebar';
import { PrivateHeader } from '@widgets/PrivateHeader';

export const PrivateLayout: FC = () => {
  const token = cookieManager.getCookie('accessToken');

  setupAuthInterceptors(axiosInstance);

  if (!token) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      <PrivateHeader />
      <main className='flex size-full flex-row'>
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};
