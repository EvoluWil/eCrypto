import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../components/footer/footer.component';
import { Header } from '../components/header/header.component';
import { CryptoProvider } from '../contexts/crypto.context';
import { GlobalStyle } from '../styles/global.styles';
import { theme } from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CryptoProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CryptoProvider>
    </ThemeProvider>
  );
};

export default App;
