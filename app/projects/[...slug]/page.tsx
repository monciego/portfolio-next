import { pageMetadata, toDescription } from '@/lib/seo';
import { projects } from '@/lib/velite';
import type { Metadata } from 'next';
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

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(await params);
  if (!project) return {};

  return pageMetadata({
    title: project.title,
    description: toDescription(project.excerpt),
    path: `/${project.slug}`,
    image: {
      url: project.coverImage.src,
      width: project.coverImage.width,
      height: project.coverImage.height,
      alt: project.title,
    },
  });
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
