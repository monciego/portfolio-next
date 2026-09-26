import { JsonLd } from '@/components/json-ld';
import { AUTHOR, HOME_DESCRIPTION, SITE_URL, pageMetadata } from '@/lib/seo';
import { projects, testimonials } from '@/lib/velite';
import { sortProjects, sortTestimonials, toProjectSummary } from '@/lib/utils';
import { WRITINGS } from '@/lib/writings';
import type { Metadata } from 'next';
import { HomeClient } from './home-client';

export const metadata: Metadata = pageMetadata({
  description: HOME_DESCRIPTION,
  path: '/',
});

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR,
  alternateName: 'monciego',
  url: SITE_URL,
  jobTitle: 'Software Developer',
  address: { '@type': 'PostalAddress', addressCountry: 'PH' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Pangasinan State University',
  },
  sameAs: [
    'https://github.com/monciego',
    'https://www.linkedin.com/in/jericho-bantiquete-450541179/',
  ],
};

// Data is prepared on the server so the client bundle never includes the
// Velite JSON (which carries every project's compiled MDX body).
export default function Home() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <HomeClient
        projects={sortProjects(projects).map(toProjectSummary)}
        testimonials={sortTestimonials(testimonials)}
        writings={[...WRITINGS].sort(
          (a, b) => Date.parse(b.date) - Date.parse(a.date)
        )}
      />
    </>
  );
}
