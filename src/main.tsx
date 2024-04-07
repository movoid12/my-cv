import "@mantine/core/styles.css";
import React, { Suspense } from "react";
import { theme } from "./theme";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import Loading from "./components/ui/loading.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </MantineProvider>
  </React.StrictMode>
);
