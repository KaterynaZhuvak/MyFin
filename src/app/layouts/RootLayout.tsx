import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import { cookieManager } from '@shared/lib/cookieManager';

export const RootLayout: FC = () => {
  const token = cookieManager.getCookie('accessToken');

  return token ? (
    <Navigate to='/expenses' />
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
