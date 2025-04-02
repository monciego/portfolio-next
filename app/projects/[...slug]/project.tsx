'use client';

import { Project as IProject } from '@/.velite';
import { MDXContent } from '@/app/components/mdx-components';
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
    <>
      <ProjectDetailsContainer className="container">
        <ProjectSubtitle>{project.subTitle}</ProjectSubtitle>
        <ProjectDetailsTitle>{project.title}</ProjectDetailsTitle>
        <ProjectDetailImageContainer>
          <ProjectDetailImage
            src={project.coverImage}
            alt={`Cover Image for ${project.title}`}
            width={1150}
            height={530}
          />
        </ProjectDetailImageContainer>
        <ContentContainer>
          <MDXContent code={project.content} />
          <LinkContainer>
            <Link href="/">← View more projects</Link>
          </LinkContainer>
        </ContentContainer>
      </ProjectDetailsContainer>{' '}
    </>
  );
};

export default Project;
