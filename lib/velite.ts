import type { Project, Testimonial } from '@/.velite';

import projectsJson from '../.velite/projects.json';
import testimonialsJson from '../.velite/testimonials.json';
import blogsJson from '../.velite/blogs.json';
import reflectionsJson from '../.velite/reflections.json';
import notesJson from '../.velite/notes.json';
import poemsJson from '../.velite/poems.json';
import journalJson from '../.velite/journal.json';
import {
  WRITING_CATEGORIES,
  type Writing,
  type WritingCategory,
  type WritingCategoryConfig,
} from './writing-categories';

interface WritingRaw {
  title: string;
  date: string;
  slug: string;
  excerpt?: string;
  content: string;
}

function stripPrefix(slug: string, prefix: string): string {
  return slug.replace(new RegExp(`^${prefix}/`), '');
}

function processWritings(
  raw: WritingRaw[],
  category: WritingCategory
): Writing[] {
  return raw.map((w) => ({
    ...w,
    slug: stripPrefix(stripPrefix(w.slug, 'writings'), category),
    category,
    // Keep ISO date string - format once in client
    date: w.date,
  }));
}

export const projects = projectsJson as Project[];
export const testimonials = testimonialsJson as Testimonial[];
export const blogs = processWritings(blogsJson as WritingRaw[], 'blogs');
export const reflections = processWritings(
  reflectionsJson as WritingRaw[],
  'reflections'
);
export const notes = processWritings(notesJson as WritingRaw[], 'notes');
export const poems = processWritings(poemsJson as WritingRaw[], 'poems');
export const journal = processWritings(journalJson as WritingRaw[], 'journal');

export type { Project, Testimonial };

export { WRITING_CATEGORIES };
export type { Writing, WritingCategory, WritingCategoryConfig };

export const allWritings: Writing[] = [
  ...blogs,
  ...reflections,
  ...notes,
  ...poems,
  ...journal,
];
