import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Navbar from '../app/components/navbar';
import { GlobalStyles } from '../app/styles/GlobalStyles';
import { theme } from '../app/styles/theme';
import { Footer } from './footer';

export interface ILayoutProps {
  children?: React.ReactNode | undefined;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jericho Bantiquete&apos;s Portfolio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
