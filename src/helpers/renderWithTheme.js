import React from 'react';
import renderer from 'react-test-renderer';
import theme from '../theme';
import {ThemeProvider} from 'styled-components';

export const wrapWithThemeProvider = component =>
  <ThemeProvider theme={theme}>
    {component}
  </ThemeProvider>

// Helpers creating a component to be tested with styled component Theme injected
export function renderWithTheme(component) {
  return renderer.create(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};