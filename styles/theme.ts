// my-theme.ts

import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  fonts: {
    inter: 'var(--font-inter), sans-serif',
    syncopate: 'var(--font-syncopate), sans-serif',
    firaCode: 'var(--font-fira-code), monospace',
    playfairDisplay: 'var(--font-playfair), serif',
    bunch: 'var(--font-bunch), serif',
    mono: 'var(--font-mono), monospace',
  },
  colors: {
    white: '#ffffff',
    black: '#000000',

    backgroundColor: '#09090b',
    backgroundSecondary: '#1e293b',
    backgroundCode: 'rgba(30, 41, 59, 0.7)',
    backgroundHighlight: '#fbbf24',

    textPrimary: '#ffffff',
    textSecondary: '#f3f4f6',
    textTertiary: '#d1d5db',
    textMuted: '#9ca3af',
    textCode: '#f87171',

    borderPrimary: '#374151',
    borderSecondary: '#4b5563',

    accentBlue: '#60a5fa',
    accentBlueHover: '#93c5fd',

    lightViolet: '#9892E3',
    shadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
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
