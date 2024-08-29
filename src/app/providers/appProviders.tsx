import type { FC, PropsWithChildren } from 'react';
import { StoreProvider } from './storeProvider';
import { ReactQueryProvider } from './reactQueryProvider';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </StoreProvider>
  );
};
