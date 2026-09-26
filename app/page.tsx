import { projects, testimonials } from '@/lib/velite';
import { sortProjects, sortTestimonials, toProjectSummary } from '@/lib/utils';
import { WRITINGS } from '@/lib/writings';
import { HomeClient } from './home-client';

// Data is prepared on the server so the client bundle never includes the
// Velite JSON (which carries every project's compiled MDX body).
export default function Home() {
  return (
    <HomeClient
      projects={sortProjects(projects).map(toProjectSummary)}
      testimonials={sortTestimonials(testimonials)}
      writings={[...WRITINGS].sort(
        (a, b) => Date.parse(b.date) - Date.parse(a.date)
      )}
    />
  );
}
