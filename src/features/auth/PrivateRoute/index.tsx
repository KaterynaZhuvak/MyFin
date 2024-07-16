import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { cookieManager } from '@shared/lib/cookieManager';
import { setupAuthInterceptors } from '@features/auth/model/auth.interceptor';
import { axiosInstance } from '@shared/api/axios';
import { Sidebar } from '@entities/Sidebar';
import { HeaderWorking } from '@entities/HeaderWorking';

export const PrivateRoute: FC = () => {
  const token = cookieManager.getCookie('accessToken');

  setupAuthInterceptors(axiosInstance);

  if (!token) {
    return <Navigate to='/login' />;
  }

  return (
    <main className='flex h-full flex-row'>
      <Sidebar />
      <section className='flex size-full flex-col'>
        <HeaderWorking />
        <Outlet />
      </section>
    </main>
  );
};
