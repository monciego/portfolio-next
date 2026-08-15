import { notFound } from 'next/navigation';
import {
  getWritingsByCategory,
  WRITING_CATEGORIES,
  type WritingCategory,
  type WritingCategoryConfig,
} from '@/lib/writings';
import { CategoryPageClient } from './CategoryPageClient';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
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

  const writings = getWritingsByCategory(catKey);

  return (
    <CategoryPageClient
      category={catKey}
      categoryConfig={categoryConfig}
      writings={writings}
    />
  );
}
