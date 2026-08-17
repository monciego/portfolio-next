'use client';

import { About } from '@/components/about';
import Experience from '@/components/experience';
import { Hero } from '@/components/hero';
import { Mantra } from '@/components/mantra';
import Projects from '@/components/projects';
import { Testimonials } from '@/components/testimonials';
import { useRestoreHomeScroll } from '@/lib/use-scroll-restoration';

export default function Home() {
  useRestoreHomeScroll();

  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Mantra />
      <Testimonials />
    </main>
  );
}
