import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/providers/theme-provider';
import { theme } from '@/styles/theme';
import { Metadata } from 'next';
import localFont from 'next/font/local';

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

export const metadata: Metadata = {
  title: 'Jericho Bantiquete Portfolio',
  description:
    'Jericho Bantiquete is a developer based in Philippines who specializes in building responsive websites.',
  metadataBase: new URL('https://jerichobantiquete.vercel.app'),
  authors: [{ name: 'Jericho P. Bantiquete' }],
  creator: 'Jericho P. Bantiquete',
  publisher: 'Jericho P. Bantiquete',
  keywords: [
    'portfolio',
    'front-end portfolio',
    'jericho',
    'jericho bantiquete',
    'software engineer portfolio',
    'web developer portfolio',
    'monciego',
  ],
  openGraph: {
    title: 'Jericho Bantiquete Portfolio',
    description:
      'Jericho Bantiquete is a software engineer based in Philippines who specializes in building responsive websites.',
    url: 'https://jerichobantiquete.vercel.app/',
    siteName: 'Jericho Bantiquete Portfolio',
    images: [
      {
        url: 'https://i.ibb.co/D7ZpgxX/jericho-bantiquete.png',
        width: 1200,
        height: 630,
        alt: 'Jericho Bantiquete Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jericho Bantiquete | Software Engineer',
    description:
      'Jericho Bantiquete is a front-end developer based in Philippines who specializes in building responsive websites.',
    creator: '@monciego',
    images: ['https://i.ibb.co/D7ZpgxX/jericho-bantiquete.png'],
  },
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
  alternates: {
    canonical: 'https://jerichobantiquete.vercel.app',
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
      className={`${inter.variable} ${syncopate.variable} ${playfairDisplay.variable} ${fira_code.variable}`}
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
