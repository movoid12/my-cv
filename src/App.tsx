import { DataProvider } from "./providers/data-provider";
import MainLayout from "./layouts/main-layout";

export default function App() {
  return (
    <DataProvider>
      <MainLayout />
    </DataProvider>
  );
}
