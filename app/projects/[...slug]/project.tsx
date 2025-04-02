'use client';

import { Project as IProject } from '@/.velite';
import { MDXContent } from '@/app/components/mdx-components';
import Link from 'next/link';
import {
  ContentContainer,
  LinkContainer,
  ProjectDetailImage,
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
      <ProjectDetailsContainer>
        <ProjectSubtitle>{project.subTitle}</ProjectSubtitle>
        <ProjectDetailsTitle>{project.title}</ProjectDetailsTitle>
        <div>
          <ProjectDetailImage
            src={project.coverImage}
            alt={`Cover Image for ${project.title}`}
            width={1300}
            height={530}
          />
        </div>
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
