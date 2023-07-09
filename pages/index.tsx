import Head from 'next/head';
import { About } from '../components/about';
import { Hero } from '../components/hero';
import Layout from '../components/layout';
import { Mantra } from '../components/mantra';
import Projects from '../components/projects';
import { Terminal } from '../components/terminal';
import { Testimonials } from '../components/testimonials';
import Project from '../interfaces/project';
import { getAllProjects } from '../lib/api';
import { RadialGradient } from '../styles/Hero.styled';

type Props = {
  allProjects: Project[];
};

export default function Home({ allProjects }: Props) {
  return (
    <Layout>
      <Head>
        <title>Jericho Bantiquete Portfolio</title>
        <link rel="icon" href="images/logo.svg" />
      </Head>
      <RadialGradient />
      <Hero />
      <Terminal />
      <Projects allProjects={allProjects} />
      <About />
      <Mantra />
      <Testimonials />
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    'slug',
    'title',
    'githubCode',
    'livePreview',
    'date',
    'coverImage',
    'transitionImage',
    'subTitle',
    'disabledLive',
    'disabledGithub',
  ]);

  return {
    props: {
      allProjects,
    },
  };
}
