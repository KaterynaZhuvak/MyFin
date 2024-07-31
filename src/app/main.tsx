import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactModal from 'react-modal';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import './styles/index.css';
import { queryClient } from '@shared/api/query-client';
import { App } from './App';
import { StoreProvider } from './providers/storeProvider';

ReactModal.setAppElement('#root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- This rule is disabled due to the fact that we always have such an element.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </StoreProvider>
    </QueryClientProvider>
  </StrictMode>
);
