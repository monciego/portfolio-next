// my-theme.ts

export const theme = {
  fonts: {
    inter: "'Inter', sans-serif;",
    syncopate: "'Syncopate', sans-serif;",
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    backgroundColor: '#0C0E13',
  },
  breakpoints: {
    lg: '64rem',
    md: '58.125rem',
    sm: '48rem',
    xs: '31.25rem',
  },
};

export type MyProps = {
  theme: typeof theme;
};
