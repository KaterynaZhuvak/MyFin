import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { SharedLayout } from '../shared/layouts/SharedLayout';

export const App: FC = () => {
  return (
    <SharedLayout>
      <Outlet />
    </SharedLayout>
  );
};
//
