import type { FC } from 'react';
import { Outlet } from 'react-router';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';

export const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
