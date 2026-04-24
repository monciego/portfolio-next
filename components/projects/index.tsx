import { projects } from '#velite';
import { sortProjects } from '@/lib/utils';
import React, { useMemo } from 'react';
import { SectionHeading } from '../ui/section-heading';
import ProjectList from './project-list';
import { ProjectContainer, ProjectListContainer } from './projects.styles';

const Projects: React.FunctionComponent = () => {
  const sortedProjects = useMemo(() => sortProjects(projects), []);

  return (
    <ProjectContainer id="projects" className="container">
      <SectionHeading
        titleNumber="01"
        sectionTitle="projects"
        sectionDetails="Selected projects I've worked on recently."
        sectionHeadingLink="https://github.com/monciego"
        sectionHeadingLinkContent="Want to see more?"
      />

      {/* First two projects are above the fold — prioritise their images */}
      <ProjectListContainer>
        {sortedProjects.slice(0, 2).map((project) => (
          <ProjectList
            key={project.slug}
            subTitle={project.subTitle}
            title={project.title}
            sourceCodeLink={project.sourceCodeLink}
            liveLink={project.liveLink}
            coverImage={project.coverImage}
            transitionImage={project.transitionImage}
            slug={project.slug}
            preloadImage={true}
            isLiveLinkDisabled={project.isLiveLinkDisabled}
            isSourceCodeLinkDisabled={project.isSourceCodeLinkDisabled}
          />
        ))}
      </ProjectListContainer>

      <ProjectListContainer
        style={{ marginTop: '1rem' }}
        $templateColumns="repeat(3, minmax(0, 1fr))"
      >
        {sortedProjects.slice(2).map((project) => (
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
        ))}
      </ProjectListContainer>
    </ProjectContainer>
  );
};

export default Projects;
