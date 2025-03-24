import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { GoMarkGithub } from 'react-icons/go';
import {
  CategoryLabel,
  Dot,
  ProjectImageContainer,
  ProjectLink,
  ProjectLinksContainer,
  ProjectStyledContainer,
  ProjectTitle,
  ProjectTitleContainer,
  ProjectTransitionImage,
  StyledProjectImage,
} from '../styles/Project.styled';

export interface IProjectListProps {
  subTitle: string;
  title: string;
  githubCode: string;
  livePreview: string;
  coverImage: string | StaticImageData;
  transitionImage: string | StaticImageData;
  slug: string;
  preloadImage: boolean;
  disabledLive: boolean;
  disabledGithub: boolean;
}

const ProjectList: React.FunctionComponent<IProjectListProps> = ({
  subTitle,
  title,
  githubCode,
  livePreview,
  coverImage,
  transitionImage,
  slug,
  preloadImage,
  disabledLive,
  disabledGithub,
}) => {
  return (
    <ProjectStyledContainer>
      <Link href={`/project/${slug}`}>

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
      <ProjectLinksContainer disabled={disabledGithub || disabledLive}>
        <GoMarkGithub />
        <ProjectLink
          // disabled={disabled}
          disabled={disabledGithub}
          href={githubCode}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Code
        </ProjectLink>
        <Dot>&bull;</Dot>
        <BiLinkExternal />
        <ProjectLink
          // disabled={disabled}
          disabled={disabledLive}
          href={livePreview}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Preview
        </ProjectLink>
      </ProjectLinksContainer>
    </ProjectStyledContainer>
  );
};

export default ProjectList;
