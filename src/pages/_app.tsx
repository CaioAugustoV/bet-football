import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "@styles/global";
import colors from "@styles/theme";

import store from "@redux/store";

const theme: DefaultTheme = { colors };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
