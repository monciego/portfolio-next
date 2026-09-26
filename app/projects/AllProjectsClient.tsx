'use client';

import ProjectList from '@/components/projects/project-list';
import {
  ProjectContainer,
  ProjectListContainer,
} from '@/components/projects/projects.styles';
import {
  SectionDetails,
  SectionTitle,
} from '@/components/ui/section-heading/section-heading.styles';
import type { ProjectSummary } from '@/lib/utils';
import { BackLink, Header } from './projects-page.styles';

interface AllProjectsClientProps {
  // Expected pre-sorted by date
  projects: ProjectSummary[];
}

export function AllProjectsClient({ projects }: AllProjectsClientProps) {
  return (
    <main className="container">
      <ProjectContainer>
        <BackLink href="/">← Back Home</BackLink>

        <Header>
          <SectionTitle $number={''}>projects</SectionTitle>
          <SectionDetails>
            Everything I&apos;ve built — client work, systems, and side
            projects.
          </SectionDetails>
        </Header>

        <ProjectListContainer $templateColumns="repeat(3, minmax(0, 1fr))">
          {projects.map((project, index) => (
            <ProjectList
              key={project.slug}
              subTitle={project.subTitle}
              title={project.title}
              sourceCodeLink={project.sourceCodeLink}
              liveLink={project.liveLink}
              coverImage={project.coverImage}
              transitionImage={project.transitionImage}
              slug={project.slug}
              // First row is above the fold
              preloadImage={index < 3}
              isLiveLinkDisabled={project.isLiveLinkDisabled}
              isSourceCodeLinkDisabled={project.isSourceCodeLinkDisabled}
            />
          ))}
        </ProjectListContainer>
      </ProjectContainer>
    </main>
  );
}
