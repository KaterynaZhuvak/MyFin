import type { FC, PropsWithChildren } from 'react';
import { StoreProvider } from './storeProvider';
import { ReactQueryProvider } from './reactQueryProvider';
import { AlertProvider } from './alertProvider';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <AlertProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </AlertProvider>
    </StoreProvider>
  );
};
