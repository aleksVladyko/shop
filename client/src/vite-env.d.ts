/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_LIMIT: number
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
