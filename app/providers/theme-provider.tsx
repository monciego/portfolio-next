'use client';

import StyledComponentsRegistry from '@/lib/registry';
import * as React from 'react';
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: DefaultTheme;
}

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return (
    <StyledComponentsRegistry>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </StyledComponentsRegistry>
  );
}
