import { MantineProvider } from '@mantine/core';
import { StrictMode, Suspense } from 'react';
import reactDom from 'react-dom/client';

import App from './app.tsx';
import LoadingSpinner from './components/ui/loading-spinner.tsx';
import { theme } from './theme';

import '@mantine/core/styles.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

reactDom.createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </MantineProvider>
  </StrictMode>,
);
