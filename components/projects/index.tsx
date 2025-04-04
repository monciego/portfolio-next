import { projects } from '#velite';
import { sortProjects } from '@/lib/utils';
import React from 'react';
import { SectionHeading } from '../ui/section-heading';
import ProjectList from './project-list';
import { ProjectContainer, ProjectListContainer } from './projects.styles';

const Projects: React.FunctionComponent = () => {
  const sortedProjects = sortProjects(projects);
  const allProjects = sortedProjects;

  return (
    <ProjectContainer id="projects" className="container">
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
            <ProjectList
              key={project.slug}
              subTitle={project.subTitle}
              title={project.title}
              sourceCodeLink={project.sourceCodeLink}
              liveLink={project.liveLink}
              coverImage={project.coverImage}
              transitionImage={project.transitionImage}
              slug={project.slug}
              preloadImage={false}
              isLiveLinkDisabled={project.isLiveLinkDisabled}
              isSourceCodeLinkDisabled={project.isSourceCodeLinkDisabled}
            />
          );
        })}
      </ProjectListContainer>
      <ProjectListContainer
        style={{ marginTop: '1rem' }}
        $templateColumns="repeat(3, minmax(0, 1fr))"
      >
        {allProjects.slice(2).map((project) => {
          return (
            <ProjectList
              key={project.slug}
              subTitle={project.subTitle}
              title={project.title}
              sourceCodeLink={project.sourceCodeLink}
              liveLink={project.liveLink}
              coverImage={project.coverImage}
              transitionImage={project.transitionImage}
              slug={project.slug}
              preloadImage={false}
              isLiveLinkDisabled={project.isLiveLinkDisabled}
              isSourceCodeLinkDisabled={project.isSourceCodeLinkDisabled}
            />
          );
        })}
      </ProjectListContainer>
    </ProjectContainer>
  );
};

export default Projects;
