/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOCIAL_INSTAGRAM?: string;
  readonly VITE_SOCIAL_FACEBOOK?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
