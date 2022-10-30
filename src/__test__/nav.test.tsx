import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Nav from '../components/nav/Nav';

describe('Nav', () => {
  it('render a Nav', () => {
    const el = render(
      <ThemeProvider theme={theme}>
        <Nav />
      </ThemeProvider>
    );
    expect(el).toMatchSnapshot();
  });
});
