'use client';
import { About } from './components/about';
import { Hero } from './components/hero';
import { Mantra } from './components/mantra';
import { Terminal } from './components/terminal';

export default function Home() {
  return (
    <>
      <Hero />
      <Terminal />
      <About />
      <Mantra />
    </>
  );
}
