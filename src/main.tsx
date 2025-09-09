import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ContextProviders from './ContextProviders';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ContextProviders>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </ContextProviders>
  </React.StrictMode>
);
