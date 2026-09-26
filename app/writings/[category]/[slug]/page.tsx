import { JsonLd } from '@/components/json-ld';
import { AUTHOR, SITE_URL, pageMetadata, toDescription } from '@/lib/seo';
import {
  WRITING_CATEGORIES,
  getWriting,
  getWritingsByCategory,
  toSummary,
  type Writing,
} from '@/lib/writings';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WritingClient } from './WritingClient';

interface WritingPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];

  for (const { key: category } of WRITING_CATEGORIES) {
    const slugs = getWritingsByCategory(category).map((w) => w.slug);
    for (const slug of slugs) {
      params.push({ category, slug });
    }
  }
  return params;
}

function describe(writing: Writing): string {
  return toDescription(
    writing.excerpt || `${writing.title} — from Jericho Bantiquete's writings.`
  );
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const writing = await getWritingContent(category, slug);
  if (!writing) return {};

  return pageMetadata({
    title: writing.title,
    description: describe(writing),
    path: `/writings/${writing.category}/${writing.slug}`,
    type: 'article',
    publishedTime: writing.date,
  });
}

async function getWritingContent(category: string, slug: string) {
  const writing = getWriting(slug);
  if (!writing || writing.category !== category) return null;
  return writing;
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { category, slug } = await params;
  const writing = await getWritingContent(category, slug);

  if (!writing) {
    notFound();
  }

  const url = `${SITE_URL}/writings/${writing.category}/${writing.slug}`;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: writing.title,
          description: describe(writing),
          datePublished: writing.date,
          url,
          mainEntityOfPage: url,
          author: { '@type': 'Person', name: AUTHOR, url: SITE_URL },
        }}
      />
      <WritingClient
        category={writing.category}
        slug={writing.slug}
        title={writing.title}
        date={writing.date}
        excerpt={writing.excerpt || ''}
        content={writing.content}
        tocWritings={getWritingsByCategory(writing.category).map(toSummary)}
      />
    </>
  );
}
