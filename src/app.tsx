import MainLayout from './layouts/main-layout';
import { DataProvider } from './providers/data-provider';
import IntlProvider from './providers/intl-provider';

export default function App() {
  return (
    <IntlProvider>
      <DataProvider>
        <MainLayout />
      </DataProvider>
    </IntlProvider>
  );
}
