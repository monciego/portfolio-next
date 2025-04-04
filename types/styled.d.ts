// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      inter: string;
      syncopate: string;
      firaCode: string;
      playfairDisplay: string;
    };
    colors: {
      white: string;
      black: string;
      backgroundColor: string;
      lightViolet: string;
    };
    breakpoints: {
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
  }
}
