import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/index.css';
import { App } from './App.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- This rule is disabled due to the fact that we always have such an element.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
