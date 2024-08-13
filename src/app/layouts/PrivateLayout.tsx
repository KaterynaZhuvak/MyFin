import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { cookieManager } from '@shared/lib/cookieManager';
import { setupAuthInterceptors } from '@features/auth/model/auth.interceptor';
import { axiosInstance } from '@shared/api/axios';
import { PrivateHeader } from '@widgets/PrivateHeader';
import { Sidebar } from '@widgets/Sidebar';
import { BackToButton } from '@widgets/Sidebar/ui/BackToButton';
import { currenciesApi } from '@entities/currencies';
import { categoriesApi } from '@entities/categories';
import { useStore } from '@shared/lib/useStore';

setupAuthInterceptors(axiosInstance);

export const PrivateLayout: FC = () => {
  const token = cookieManager.getCookie('accessToken');
  const { categoriesStore, currenciesStore } = useStore();

  useQuery({
    queryKey: ['currencies'],
    queryFn: async () => {
      const data = await currenciesApi();
      currenciesStore.setCurrencies(data);
      return data;
    },
    enabled: Boolean(token),
  });

  useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const data = await categoriesApi();
      categoriesStore.setCategories(data);
      return data;
    },
    enabled: Boolean(token),
  });
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
