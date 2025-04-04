import { Project, Testimonial } from '@/.velite';

/**
 * Format date in "Month Day, Year" format
 */
export function formatDate(input: string | number | Date): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Generic sort function for arrays with a date property
 */
function sortByDate<T extends { date: string | number }>(items: T[]): T[] {
  return items.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

/**
 * Sort projects by date (ascending)
 */
export const sortProjects = (projects: Project[]) => sortByDate(projects);

/**
 * Sort testimonials by date (ascending)
 */
export const sortTestimonials = (testimonials: Testimonial[]) =>
  sortByDate(testimonials);
