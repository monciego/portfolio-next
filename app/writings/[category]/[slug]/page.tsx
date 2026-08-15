import { notFound } from 'next/navigation';
import { getWriting, getWritingsByCategory } from '@/lib/writings';
import { WritingClient } from './WritingClient';

interface WritingPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  const categories = ['blogs', 'reflections', 'poems', 'journal'] as const;

  for (const category of categories) {
    const slugs = getWritingsByCategory(category).map((w) => w.slug);
    for (const slug of slugs) {
      params.push({ category, slug });
    }
  }
  return params;
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

  return (
    <WritingClient
      category={writing.category}
      slug={writing.slug}
      title={writing.title}
      date={writing.date}
      excerpt={writing.excerpt || ''}
      content={writing.content}
    />
  );
}
