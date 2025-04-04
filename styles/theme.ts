// my-theme.ts

export const theme = {
  fonts: {
    inter: 'var(--font-inter), sans-serif',
    syncopate: 'var(--font-syncopate), sans-serif',
    firaCode: 'var(--font-fira-code), monospace',
    playfairDisplay: 'var(--font-playfair), serif',
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    backgroundColor: '#09090b',
    lightViolet: '#9892E3',
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
