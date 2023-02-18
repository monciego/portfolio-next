import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
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
        <Main>{children}</Main>
      </ThemeProvider>
    </>
  );
};

const Main = styled.main`
  width: 90%;
  margin: 0 auto;
  overflow-x: hidden;
`;

export default Layout;
