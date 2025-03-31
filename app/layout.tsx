import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from './components/navbar';
import { ThemeProvider } from './providers/theme-provider';
import { theme } from './styles/theme';

const syncopate = localFont({
  src: './fonts/Syncopate-Bold.woff',
  variable: '--font-syncopate',
});

const playfairDisplay = localFont({
  src: './fonts/PlayfairDisplay-Bold.woff',
  variable: '--font-playfair',
});

const inter = localFont({
  src: [
    {
      path: './fonts/Inter_18pt-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter_18pt-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Inter_18pt-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

const fira_code = localFont({
  src: [
    {
      path: './fonts/FiraCode-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FiraCode-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Jericho Bantiquete Portfolio',
  description:
    'Jericho Bantiquete is a developer based in Philippines who specializes in building responsive websites.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syncopate.variable} ${playfairDisplay.variable} ${fira_code.variable}`}
    >
      <body>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
