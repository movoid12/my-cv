import MainLayout from './layouts/main-layout';
import { DataProvider } from './providers/data-provider';

export default function App() {
  return (
    <DataProvider>
      <MainLayout />
    </DataProvider>
  );
}
