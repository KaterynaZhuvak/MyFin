import type { FC } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../../../widgets/Header/Header';

export const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
