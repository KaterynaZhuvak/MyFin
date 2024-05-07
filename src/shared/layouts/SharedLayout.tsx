import type { FC, ReactNode } from 'react';

interface SharedLayoutProps {
  children: ReactNode;
}

export const SharedLayout: FC<SharedLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>SharedLayout</header>
      <main>{children}</main>
    </div>
  );
};
