/// <reference types="vite/client" />

interface ImportMetaEnv {
  // required for int, qa and prod
  readonly VITE_CONFIG_API_URL_PRIMARY_LOCALE: string;
  readonly VITE_CONFIG_API_URL_SECONDARY_LOCALE: string;
}
