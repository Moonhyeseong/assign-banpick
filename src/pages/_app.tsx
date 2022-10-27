import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../app/store';
import { ThemeProvider } from 'styled-components';
import ContentWrapper from '../components/Layout/ContentsWrapper';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ContentWrapper>
            <Component {...pageProps} />
          </ContentWrapper>
        </Provider>
      </ThemeProvider>
    </>
  );
};
export default MyApp;
