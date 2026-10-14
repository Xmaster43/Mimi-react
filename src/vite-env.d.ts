/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string | undefined;
  readonly VITE_API_AUTH: string | undefined;
  readonly VITE_API_USERS: string | undefined;
  readonly VITE_API_PRODUCTS: string | undefined;
  readonly VITE_API_SERVICES: string | undefined;
  readonly VITE_API_WORKERS: string | undefined;
  readonly VITE_API_RESERVATIONS: string | undefined;
  readonly MODE: 'development' | 'production' | 'test';
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}