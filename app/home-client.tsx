'use client';

import { About } from '@/components/about';
import Experience from '@/components/experience';
import { Hero } from '@/components/hero';
import { Mantra } from '@/components/mantra';
import Projects from '@/components/projects';
import { Testimonials } from '@/components/testimonials';
import type { Testimonial } from '@/lib/velite';
import type { ProjectSummary } from '@/lib/utils';
import { useRestoreHomeScroll } from '@/lib/use-scroll-restoration';
import type { WritingSummary } from '@/lib/writing-categories';

interface HomeClientProps {
  projects: ProjectSummary[];
  testimonials: Testimonial[];
  writings: WritingSummary[];
}

export function HomeClient({
  projects,
  testimonials,
  writings,
}: HomeClientProps) {
  useRestoreHomeScroll();

  return (
    <main>
      <Hero
        projects={projects}
        testimonials={testimonials}
        writings={writings}
      />
      <Projects projects={projects.filter((p) => p.featured)} />
      <About />
      <Experience />
      <Mantra />
      <Testimonials testimonials={testimonials} />
    </main>
  );
}
