import { pageMetadata } from '@/lib/seo';
import { WRITINGS } from '@/lib/writings';
import type { Metadata } from 'next';
import { WritingsPageClient } from './WritingsPageClient';

export const metadata: Metadata = pageMetadata({
  title: 'Writings',
  description:
    'Reflections, blogs, journals, notes, and poems by Jericho Bantiquete on learning, building software, and growth.',
  path: '/writings',
});

export default function WritingsPage() {
  return <WritingsPageClient writings={WRITINGS} />;
}
