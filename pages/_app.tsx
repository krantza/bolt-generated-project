import { ThemeProvider } from 'styled-components';
    import { useDarkMode } from '../lib/useDarkMode';
    import { lightTheme, darkTheme } from '../styles/themes';
    import type { AppProps } from 'next/app';
    import GlobalStyle from '../styles/global';
    import { Analytics } from '@vercel/analytics/react';

    function MyApp({ Component, pageProps }: AppProps) {
      const [theme, toggleTheme] = useDarkMode();
      const themeMode = theme === 'light' ? lightTheme : darkTheme;

      return (
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <Component {...pageProps} />
          <Analytics />
        </ThemeProvider>
      );
    }

    export default MyApp;
