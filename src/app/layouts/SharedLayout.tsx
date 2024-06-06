import type { FC, ReactNode } from 'react';
import { Header } from '../../widgets/Header/Header';

interface SharedLayoutProps {
  children: ReactNode;
}

export const SharedLayout: FC<SharedLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
