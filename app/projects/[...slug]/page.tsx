import { projects } from '@/.velite';
import { notFound } from 'next/navigation';
import Project from './project';

interface ProjectPageProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams(params: ProjectPageProps['params']) {
  const slug = params?.slug?.join('/');
  const project = projects.find((project) => project.slugAsParams === slug);

  return project;
}

export async function generateStaticParams(): Promise<
  ProjectPageProps['params'][]
> {
  return projects.map((project) => ({ slug: project.slugAsParams.split('/') }));
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = await getProjectFromParams(params);

  if (!project) {
    notFound();
  }

  return <Project project={project} />;
};

export default ProjectPage;
