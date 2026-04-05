/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOCIAL_INSTAGRAM?: string;
  readonly VITE_SOCIAL_FACEBOOK?: string;
  readonly VITE_WHATSAPP_E164?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
