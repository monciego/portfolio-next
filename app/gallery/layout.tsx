import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Gallery',
    description: 'Photos from Jericho Bantiquete’s life outside of software.',
    path: '/gallery',
  }),
  // Placeholder page — keep it out of search results until it has content.
  // Remove this (and add it to app/sitemap.ts) once the gallery is live.
  robots: { index: false, follow: true },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
