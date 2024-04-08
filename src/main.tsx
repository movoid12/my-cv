import React, { Suspense } from 'react';
import reactDom from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import { theme } from './theme';
import App from './app.tsx';
import Loading from './components/ui/loading.tsx';

import '@mantine/core/styles.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

reactDom.createRoot(rootElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </MantineProvider>
  </React.StrictMode>,
);
