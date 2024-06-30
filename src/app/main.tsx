import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { App } from './App';
import { StoreProvider } from './providers/storeProvider';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- This rule is disabled due to the fact that we always have such an element.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
