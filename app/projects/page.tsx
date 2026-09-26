import { sortProjects, toProjectSummary } from '@/lib/utils';
import { projects } from '@/lib/velite';
import type { Metadata } from 'next';
import { AllProjectsClient } from './AllProjectsClient';

export const metadata: Metadata = {
  title: 'Projects | Jericho Bantiquete',
  description: 'All projects built by Jericho Bantiquete.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <AllProjectsClient
      projects={sortProjects(projects).map(toProjectSummary)}
    />
  );
}
