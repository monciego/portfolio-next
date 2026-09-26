import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/providers/theme-provider';
import { theme } from '@/styles/theme';
import {
  AUTHOR,
  HOME_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  pageMetadata,
} from '@/lib/seo';
import { Metadata } from 'next';
import localFont from 'next/font/local';

const bunch = localFont({
  src: [
    {
      path: '../fonts/Bunch-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Bunch-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bunch',
});

const syncopate = localFont({
  src: '../fonts/Syncopate-Bold.woff',
  variable: '--font-syncopate',
});

const playfairDisplay = localFont({
  src: '../fonts/PlayfairDisplay-Bold.woff',
  variable: '--font-playfair',
});

const inter = localFont({
  src: [
    {
      path: '../fonts/Inter_18pt-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Inter_18pt-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Inter_18pt-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

const mono = localFont({
  src: [
    {
      path: '../fonts/GeistMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/GeistMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/GeistMono-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-mono',
});

const fira_code = localFont({
  src: [
    {
      path: '../fonts/FiraCode-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FiraCode-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-fira-code',
});

// Site-wide defaults. No canonical here: it would be inherited by every page
// that doesn't set its own, marking them all as duplicates of the home page.
export const metadata: Metadata = {
  ...pageMetadata({ description: HOME_DESCRIPTION }),
  title: {
    default: SITE_NAME,
    template: '%s | Jericho Bantiquete',
  },
  metadataBase: new URL(SITE_URL),
  authors: [{ name: AUTHOR }],
  creator: AUTHOR,
  publisher: AUTHOR,
  keywords: [
    'portfolio',
    'front-end portfolio',
    'jericho',
    'jericho bantiquete',
    'software engineer portfolio',
    'web developer portfolio',
    'monciego',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${mono.variable} ${syncopate.variable} ${bunch.variable} ${playfairDisplay.variable} ${fira_code.variable}`}
    >
      <body>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
