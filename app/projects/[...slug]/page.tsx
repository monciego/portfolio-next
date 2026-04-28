import { projects } from '@/lib/velite';
import { notFound } from 'next/navigation';
import Project from './project';

interface ProjectPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getProjectFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join('/');
  const project = projects.find((project) => project.slugAsParams === slug);

  return project;
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return projects.map((project) => ({ slug: project.slugAsParams.split('/') }));
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const resolvedParams = await params;
  const project = await getProjectFromParams(resolvedParams);

  if (!project) {
    notFound();
  }

  return <Project project={project} />;
};

export default ProjectPage;
