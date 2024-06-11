import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { RootLayout } from '../shared/ui/layouts/RootLayout';

export const App: FC = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};
