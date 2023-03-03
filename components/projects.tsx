import React from 'react';

import { projects } from '../constants';
import {
  ProjectContainer,
  ProjectListContainer,
} from '../styles/Project.styled';
import ProjectList from './project-list';
import { SectionHeading } from './section-heading';

export interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  return (
    <ProjectContainer id="projects">
      <SectionHeading
        titleNumber="01"
        sectionTitle="projects"
        sectionDetails="
      Selected projects I've worked on recently."
        sectionHeadingLink="https://github.com/monciego"
        sectionHeadingLinkContent="Want to see more?"
      />

      <ProjectListContainer>
        {projects.slice(0, 2).map((project) => {
          return (
            <ProjectList
              key={project.slug}
              subTitle={project.subTitle}
              title={project.title}
              githubCode={project.githubCode}
              livePreview={project.livePreview}
              coverImage={project.coverImage}
              transitionImage={project.transitionImage}
              slug={project.slug}
            />
          );
        })}
      </ProjectListContainer>
      <ProjectListContainer templateColumns="repeat(3, minmax(0, 1fr))">
        {projects.slice(2).map((project) => {
          return (
            <ProjectList
              key={project.id}
              subTitle={project.subTitle}
              title={project.title}
              githubCode={project.githubCode}
              livePreview={project.livePreview}
              coverImage={project.coverImage}
              transitionImage={project.transitionImage}
              slug={project.slug}
            />
          );
        })}
      </ProjectListContainer>
    </ProjectContainer>
  );
};

export default Projects;
