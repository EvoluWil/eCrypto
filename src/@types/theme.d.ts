import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    detail: string;
    text: {
      primary: string;
      secondary: string;
    };
    warn: string;
    error: string;
    success: string;
  }
}
