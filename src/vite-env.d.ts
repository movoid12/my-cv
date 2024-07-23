/// <reference types="vite/client" />

interface ImportMetaEnv {
  // required for int, qa and prod
  readonly VITE_CONFIG_API_URL: string;
}
