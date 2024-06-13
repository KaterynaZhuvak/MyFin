import type { FC, ReactNode } from 'react';
import { Header } from '../../../widgets/Header/Header';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
