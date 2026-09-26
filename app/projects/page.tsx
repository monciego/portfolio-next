import { pageMetadata } from '@/lib/seo';
import { sortProjects, toProjectSummary } from '@/lib/utils';
import { projects } from '@/lib/velite';
import type { Metadata } from 'next';
import { AllProjectsClient } from './AllProjectsClient';

export const metadata: Metadata = pageMetadata({
  title: 'Projects',
  description:
    'Web applications, client websites, and systems built by Jericho Bantiquete, from Laravel platforms to marketing sites.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <AllProjectsClient
      projects={sortProjects(projects).map(toProjectSummary)}
    />
  );
}
