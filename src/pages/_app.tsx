import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { Provider } from 'react-redux';
import { wrapper } from '../app/store';
import { ThemeProvider } from 'styled-components';
import ContentWrapper from '../components/Layout/ContentsWrapper';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ContentWrapper>
            <Component {...props.pageProps} />
          </ContentWrapper>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
