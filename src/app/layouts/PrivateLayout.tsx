import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { cookieManager } from '@shared/lib/cookieManager';
import { setupAuthInterceptors } from '@features/auth/model/auth.interceptor';
import { axiosInstance } from '@shared/api/axios';
import { PrivateHeader } from '@widgets/PrivateHeader';
import { Sidebar } from '@widgets/Sidebar';
import { BackToButton } from '@widgets/Sidebar/ui/BackToButton';
import { useCurrenciesQuery } from '@entities/currencies/model/useCurrenciesQuery';
import { useCategoriesQuery } from '@entities/categories/model/useCategoriesQuery';

setupAuthInterceptors(axiosInstance);

export const PrivateLayout: FC = () => {
  const token = cookieManager.getCookie('accessToken');

  useCurrenciesQuery();

  useCategoriesQuery();

  if (!token) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      <PrivateHeader />
      <main className='flex size-full flex-row'>
        <Sidebar />

        <div className='flex w-full flex-col'>
          <BackToButton />

          <Outlet />
        </div>
      </main>
    </>
  );
};
