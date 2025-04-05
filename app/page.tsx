'use client';

import { About } from '@/components/about';
import Experience from '@/components/experience';
import { Hero } from '@/components/hero';
import { Mantra } from '@/components/mantra';
import Projects from '@/components/projects';
import { Terminal } from '@/components/terminal';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Terminal />
      <Projects />
      <About />
      <Experience />
      <Mantra />
      <Testimonials />
    </>
  );
}
