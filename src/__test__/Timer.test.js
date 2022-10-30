import { render, screen } from '@testing-library/react';
import Timer from '../components/BanPick/BanPickIndicator/Timer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

describe('timer', () => {
  it('timer  test', () => {
    render(
      <ThemeProvider theme={theme}>
        <Timer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('timer')).toBeInTheDocument();
  });
});
