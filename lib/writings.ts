import {
  blogs,
  reflections,
  notes,
  poems,
  journal,
  allWritings,
  WRITING_CATEGORIES,
  type Writing,
  type WritingCategory,
  type WritingCategoryConfig,
} from '@/lib/velite';

/**
 * All writings across all categories — used by the main writings index page
 * to display the TOC and link to individual writing pages.
 */
export const WRITINGS = allWritings.map((w) => ({
  slug: w.slug,
  title: w.title,
  date: w.date,
  excerpt: w.excerpt,
  category: w.category,
}));

export { WRITING_CATEGORIES, allWritings };
export type { Writing, WritingCategory, WritingCategoryConfig };

/**
 * Get writings for a specific category.
 */
export function getWritingsByCategory(category: WritingCategory) {
  switch (category) {
    case 'blogs':
      return blogs;
    case 'reflections':
      return reflections;
    case 'notes':
      return notes;
    case 'poems':
      return poems;
    case 'journal':
      return journal;
    default:
      return [];
  }
}

/**
 * Get a single writing by slug across all categories.
 */
export function getWriting(slug: string) {
  return allWritings.find((w) => w.slug === slug);
}

/**
 * Get all writing slugs for static generation.
 */
export function getAllWritingSlugs() {
  return allWritings.map((w) => ({
    category: w.category,
    slug: w.slug,
  }));
}

/**
 * Get all writing slugs for a specific category.
 */
export function getWritingSlugsByCategory(category: WritingCategory) {
  return getWritingsByCategory(category).map((w) => w.slug);
}
