import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { FC, PropsWithChildren } from 'react';
import { queryClient } from '@shared/api/query-client';

export const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
