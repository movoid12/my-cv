import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { PortfolioProvider } from "./providers/portfolio-provider";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <PortfolioProvider>App</PortfolioProvider>
    </MantineProvider>
  );
}
