import type { Metadata } from 'next';
import { Inter, Syncopate } from 'next/font/google';
import { ThemeProvider } from './providers/theme-provider';
import { theme } from './styles/theme';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const syncopate = Syncopate({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-syncopate',
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
    <html lang="en" className={`${inter.variable} ${syncopate.variable}`}>
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
