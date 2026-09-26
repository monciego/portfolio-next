// Kept free of Velite JSON imports so client components can import it without
// pulling every compiled writing into the browser bundle.

export type WritingCategory =
  | 'blogs'
  | 'reflections'
  | 'notes'
  | 'poems'
  | 'journal';

export type Writing = {
  title: string;
  date: string;
  slug: string;
  excerpt?: string;
  content: string;
  category: WritingCategory;
};

// Writing metadata without the compiled MDX body — what list/TOC views need.
export type WritingSummary = Omit<Writing, 'content'>;

export const WRITING_CATEGORIES = [
  {
    key: 'blogs',
    label: 'Blogs',
    description: 'Longer thoughts, ideas, and perspectives',
  },
  {
    key: 'reflections',
    label: 'Reflections',
    description: 'Thoughts and realizations from experience',
  },
  {
    key: 'notes',
    label: 'Notes',
    description: 'Short ideas and things I’m exploring',
  },
  {
    key: 'journal',
    label: 'Journal',
    description: 'Personal thoughts, experiences, and updates',
  },
  {
    key: 'poems',
    label: 'Poems',
    description: 'Poems inspired by thoughts and feelings',
  },
] as const satisfies readonly {
  key: WritingCategory;
  label: string;
  description: string;
}[];

export type WritingCategoryConfig = (typeof WRITING_CATEGORIES)[number];
