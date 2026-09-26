import { SITE_URL } from '@/lib/seo';
import { projects } from '@/lib/velite';
import { WRITINGS, WRITING_CATEGORIES } from '@/lib/writings';
import type { MetadataRoute } from 'next';

// Built from Velite content, so new projects and writings are included
// automatically on the next build.
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE_URL}${path}`;

  const latestWriting = WRITINGS.reduce<string | undefined>(
    (latest, w) => (!latest || w.date > latest ? w.date : latest),
    undefined
  );

  return [
    { url: url('/'), changeFrequency: 'monthly', priority: 1 },
    { url: url('/projects'), changeFrequency: 'monthly', priority: 0.9 },
    {
      url: url('/writings'),
      lastModified: latestWriting,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    { url: url('/book-list'), changeFrequency: 'monthly', priority: 0.5 },
    ...WRITING_CATEGORIES.map(({ key }) => ({
      url: url(`/writings/${key}`),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...WRITINGS.map((w) => ({
      url: url(`/writings/${w.category}/${w.slug}`),
      lastModified: w.date,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    ...projects.map((p) => ({
      url: url(`/${p.slug}`),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}
