import type { Project, Testimonial } from '@/.velite';

// The auto-generated .velite/index.js uses `with { type: 'json' }` (import
// attributes) which requires webpack's importAttributes experiment flag.
// Importing the JSON files directly bypasses that entirely — webpack handles
// .json imports natively without any special syntax.
import projectsJson from '../.velite/projects.json';
import testimonialsJson from '../.velite/testimonials.json';

export const projects = projectsJson as Project[];
export const testimonials = testimonialsJson as Testimonial[];
export type { Project, Testimonial };
