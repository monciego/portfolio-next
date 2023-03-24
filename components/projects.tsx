import React from 'react';
import Project from '../interfaces/project';
import {
  ProjectContainer,
  ProjectListContainer,
} from '../styles/Project.styled';
import ProjectList from './project-list';
import { SectionHeading } from './section-heading';

export interface IProjectsProps {
  allProjects: Project[];
}

const Projects: React.FunctionComponent<IProjectsProps> = ({ allProjects }) => {
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
        {allProjects.slice(0, 2).map((project) => {
          return (
            <ProjectList key={project.slug} {...project} preloadImage={false} />
          );
        })}
      </ProjectListContainer>
      <ProjectListContainer
        style={{ marginTop: '1rem' }}
        templateColumns="repeat(3, minmax(0, 1fr))"
      >
        {allProjects.slice(2).map((project) => {
          return (
            <ProjectList key={project.slug} {...project} preloadImage={false} />
          );
        })}
      </ProjectListContainer>
    </ProjectContainer>
  );
};

export default Projects;
