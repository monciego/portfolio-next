import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getWritingsByCategory,
  toSummary,
  WRITING_CATEGORIES,
  type WritingCategory,
  type WritingCategoryConfig,
} from '@/lib/writings';
import { CategoryPageClient } from './CategoryPageClient';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const config = WRITING_CATEGORIES.find((c) => c.key === category);
  if (!config) return {};

  return pageMetadata({
    title: `${config.label} — Writings`,
    description: `${config.description}. ${config.label} by Jericho Bantiquete.`,
    path: `/writings/${config.key}`,
  });
}

export async function generateStaticParams() {
  return WRITING_CATEGORIES.map((cat) => ({ category: cat.key }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const catKey = category as WritingCategory;

  const categoryConfig = WRITING_CATEGORIES.find((c) => c.key === catKey) as
    | WritingCategoryConfig
    | undefined;
  if (!categoryConfig) notFound();

  const writings = getWritingsByCategory(catKey).map(toSummary);

  return (
    <CategoryPageClient
      category={catKey}
      categoryConfig={categoryConfig}
      writings={writings}
    />
  );
}
