import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

// page.tsx is a client component, so its metadata lives here
export const metadata: Metadata = pageMetadata({
  title: 'Book List',
  description:
    'Books Jericho Bantiquete is currently reading, has read, and wants to read.',
  path: '/book-list',
});

export default function BookListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
