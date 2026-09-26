import type { ProjectSummary } from '@/lib/utils';
import { saveHomeScroll } from '@/lib/use-scroll-restoration';
import React from 'react';
import { SectionHeading } from '../ui/section-heading';
import ProjectList from './project-list';
import {
  ProjectContainer,
  ProjectListContainer,
  ViewMoreContainer,
  ViewMoreLink,
} from './projects.styles';

interface ProjectsProps {
  // Featured projects only, expected pre-sorted by date
  projects: ProjectSummary[];
}

const Projects: React.FunctionComponent<ProjectsProps> = ({ projects }) => {
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
        {projects.slice(0, 2).map((project) => (
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
            onNavigate={saveHomeScroll}
          />
        ))}
      </ProjectListContainer>

      <ProjectListContainer
        style={{ marginTop: '1rem' }}
        $templateColumns="repeat(3, minmax(0, 1fr))"
      >
        {projects.slice(2).map((project) => (
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
            onNavigate={saveHomeScroll}
          />
        ))}
      </ProjectListContainer>

      <ViewMoreContainer>
        <ViewMoreLink href="/projects">View more projects →</ViewMoreLink>
      </ViewMoreContainer>
    </ProjectContainer>
  );
};

export default Projects;
