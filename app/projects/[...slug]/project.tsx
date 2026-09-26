'use client';

import type { Project as IProject } from '@/.velite';
import { MDXContent } from '@/components/mdx-component/mdx-components';
import Link from 'next/link';
import {
  ContentContainer,
  LinkContainer,
  ProjectDetailImage,
  ProjectDetailImageContainer,
  ProjectDetailsContainer,
  ProjectDetailsTitle,
  ProjectSubtitle,
} from './styles';

interface ProjectProps {
  project: IProject;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <main>
      <ProjectDetailsContainer className="container">
        <ProjectSubtitle>{project.subTitle}</ProjectSubtitle>
        <ProjectDetailsTitle as="h1">{project.title}</ProjectDetailsTitle>
        <ProjectDetailImageContainer>
          <ProjectDetailImage
            src={project.coverImage}
            alt={`Cover Image for ${project.title}`}
            width={1150}
            height={530}
            placeholder="blur"
            priority
          />
        </ProjectDetailImageContainer>
        <ContentContainer>
          <MDXContent code={project.content} />

          <LinkContainer>
            <Link href="/projects">← View all projects</Link>
          </LinkContainer>
        </ContentContainer>
      </ProjectDetailsContainer>
    </main>
  );
};

export default Project;
