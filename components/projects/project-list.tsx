'use client';

import { CodeXml, SquareArrowOutUpRight } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  CategoryLabel,
  Dot,
  ProjectImageContainer,
  ProjectLink,
  ProjectLinkContainer,
  ProjectLinksContainer,
  ProjectStyledContainer,
  ProjectTitle,
  ProjectTitleContainer,
  ProjectTransitionImage,
  StyledProjectImage,
} from './projects.styles';

export interface IProjectListProps {
  subTitle: string;
  title: string;
  sourceCodeLink?: string;
  liveLink?: string;
  coverImage: string | StaticImageData;
  transitionImage: string | StaticImageData;
  slug: string;
  preloadImage: boolean;
  isLiveLinkDisabled?: boolean;
  isSourceCodeLinkDisabled?: boolean;
  onNavigate?: () => void;
}

const ProjectList: React.FunctionComponent<IProjectListProps> = ({
  subTitle,
  title,
  sourceCodeLink,
  liveLink,
  coverImage,
  transitionImage,
  slug,
  preloadImage,
  isLiveLinkDisabled,
  isSourceCodeLinkDisabled,
  onNavigate,
}) => {
  return (
    <ProjectStyledContainer>
      <Link href={`/${slug}`} onClick={onNavigate}>
        <ProjectImageContainer>
          <StyledProjectImage
            src={coverImage}
            alt={subTitle}
            sizes="80vw"
            fill
            style={{ objectFit: 'cover' }}
            // Velite images carry a blurDataURL; plain string srcs don't
            placeholder={typeof coverImage === 'string' ? 'empty' : 'blur'}
            priority={preloadImage ? true : false}
          />
          <ProjectTransitionImage
            src={transitionImage}
            alt={subTitle}
            sizes="80vw"
            fill
            style={{ objectFit: 'cover' }}
            priority={preloadImage ? true : false}
          />
        </ProjectImageContainer>
      </Link>
      <CategoryLabel>{subTitle}</CategoryLabel>
      <ProjectTitleContainer>
        <Link href={`/${slug}`} onClick={onNavigate}>
          <ProjectTitle>{title}</ProjectTitle>
        </Link>
      </ProjectTitleContainer>
      <ProjectLinksContainer>
        <ProjectLinkContainer
          disabled={isSourceCodeLinkDisabled || isLiveLinkDisabled}
        >
          <ProjectLink
            disabled={isSourceCodeLinkDisabled}
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeXml size={18} />
            Source Code
          </ProjectLink>
        </ProjectLinkContainer>
        <Dot>&bull;</Dot>
        <ProjectLinkContainer
          disabled={isSourceCodeLinkDisabled || isLiveLinkDisabled}
        >
          <ProjectLink
            disabled={isLiveLinkDisabled}
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareArrowOutUpRight size={18} />
            Live Site
          </ProjectLink>
        </ProjectLinkContainer>
      </ProjectLinksContainer>
    </ProjectStyledContainer>
  );
};

export default ProjectList;
