import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/Global';
import { theme } from '../styles/theme';
import Navbar from './navbar';

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
      </ThemeProvider>
    </>
  );
};

export default Layout;
