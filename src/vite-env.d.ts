/// <reference types="vite/client" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BROWSER: 'chrome' | 'firefox';
    }
  }
}

export {};
