/// <reference types="vite/client" />
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    page: {
      backgroundColor: string;
    };
  }
}