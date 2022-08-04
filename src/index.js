import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Router from './Router';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
);
