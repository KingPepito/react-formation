import React from 'react';
import renderer from 'react-test-renderer';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';
// Helpers creating a component to be tested with styled component Theme injected
export function renderWithTheme(component) {
  return renderer.create(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};