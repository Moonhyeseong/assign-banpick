import React from 'react';
import { Provider } from 'react-redux';
import { wrapper } from '../app/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...props.pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
