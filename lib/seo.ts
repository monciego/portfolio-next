import type { Metadata } from 'next';

export const SITE_URL = 'https://jerichobantiquete.vercel.app';
export const SITE_NAME = 'Jericho Bantiquete Portfolio';
export const AUTHOR = 'Jericho P. Bantiquete';
export const HOME_DESCRIPTION =
  'Jericho Bantiquete is an indie software developer from the Philippines who builds web applications with Laravel, React, and TypeScript.';

const DEFAULT_IMAGE = {
  url: 'https://i.ibb.co/D7ZpgxX/jericho-bantiquete.png',
  width: 1200,
  height: 630,
  alt: SITE_NAME,
};

/**
 * Trim text to a search-snippet length, ending on a whole word.
 */
export function toDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,.;:!?-]+$/, '')}…`;
}

interface PageMetadataOptions {
  // Page title; the root layout's template appends " | Jericho Bantiquete"
  title?: string;
  description: string;
  // Absolute path, e.g. "/projects/freewrite" — becomes the canonical URL.
  // Omit only for site-wide defaults (the root layout).
  path?: string;
  image?: { url: string; width?: number; height?: number; alt?: string };
  type?: 'website' | 'article';
  publishedTime?: string;
}

/**
 * Per-page metadata with its own canonical URL and a complete Open Graph /
 * Twitter block. Next.js replaces (not merges) a parent's `openGraph`, so
 * every page must provide the full set.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
}: PageMetadataOptions): Metadata {
  const socialTitle = title ? `${title} | Jericho Bantiquete` : SITE_NAME;

  return {
    ...(title && { title }),
    description,
    ...(path && { alternates: { canonical: path } }),
    openGraph: {
      title: socialTitle,
      description,
      ...(path && { url: path }),
      siteName: SITE_NAME,
      locale: 'en_US',
      type,
      images: [image],
      ...(type === 'article' && publishedTime && { publishedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      creator: '@monciego',
      images: [image.url],
    },
  };
}
