import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { StrictMode, Suspense } from 'react';
import reactDom from 'react-dom/client';

import App from './app.tsx';
import LoadingSpinner from './components/ui/loading-spinner.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

reactDom.createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </MantineProvider>
  </StrictMode>,
);
