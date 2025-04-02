import { CodeXml, SquareArrowOutUpRight } from 'lucide-react';
import { StaticImageData } from 'next/legacy/image';
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
  githubLink: string;
  liveLink: string;
  coverImage: string | StaticImageData;
  transitionImage: string | StaticImageData;
  slug: string;
  preloadImage: boolean;
  isLiveDisabled?: boolean;
  isGithubDisabled?: boolean;
}

const ProjectList: React.FunctionComponent<IProjectListProps> = ({
  subTitle,
  title,
  githubLink,
  liveLink,
  coverImage,
  transitionImage,
  slug,
  preloadImage,
  isLiveDisabled,
  isGithubDisabled,
}) => {
  return (
    <ProjectStyledContainer>
      <Link href={`${slug}`}>
        <ProjectImageContainer>
          <StyledProjectImage
            src={coverImage}
            alt={subTitle}
            sizes="80vw"
            layout="fill"
            objectFit="cover"
            priority={preloadImage ? true : false}
          />
          <ProjectTransitionImage
            src={transitionImage}
            alt={subTitle}
            sizes="80vw"
            layout="fill"
            objectFit="cover"
            priority={preloadImage ? true : false}
          />
        </ProjectImageContainer>
      </Link>
      <CategoryLabel>{subTitle}</CategoryLabel>
      <ProjectTitleContainer>
        <Link href={`/project/${slug}`}>
          <ProjectTitle>{title}</ProjectTitle>
        </Link>
      </ProjectTitleContainer>
      <ProjectLinksContainer disabled={isGithubDisabled || isLiveDisabled}>
        <ProjectLinkContainer>
          <CodeXml size={20} />
          <ProjectLink
            disabled={isGithubDisabled}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </ProjectLink>
        </ProjectLinkContainer>
        <Dot>&bull;</Dot>
        <ProjectLinkContainer>
          <SquareArrowOutUpRight size={20} />
          <ProjectLink
            disabled={isLiveDisabled}
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </ProjectLink>
        </ProjectLinkContainer>
      </ProjectLinksContainer>
    </ProjectStyledContainer>
  );
};

export default ProjectList;
