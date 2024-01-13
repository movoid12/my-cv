import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { PortfolioProvider } from "./providers/portfolio-provider";
import MainLayout from "./layouts/main-layout";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <PortfolioProvider>
        <MainLayout />
      </PortfolioProvider>
    </MantineProvider>
  );
}
