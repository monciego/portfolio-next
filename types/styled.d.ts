// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      inter: string;
      syncopate: string;
      firaCode: string;
      playfairDisplay: string;
      bunch: string;
      mono: string;
    };
    colors: {
      white: string;
      black: string;
      backgroundColor: string;
      backgroundSecondary: string;
      backgroundCode: string;
      backgroundHighlight: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
      textMuted: string;
      textCode: string;
      borderPrimary: string;
      borderSecondary: string;
      accentBlue: string;
      accentBlueHover: string;
      lightViolet: string;
      shadow: string;
    };
    breakpoints: {
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
  }
}
