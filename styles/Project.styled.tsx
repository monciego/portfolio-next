import Image from 'next/image';
import styled from 'styled-components';

interface ProjectStyledProps {
  readonly templateColumns?: string;
}

export const ProjectContainer = styled.section``;

export const ProjectListContainer = styled.div<ProjectStyledProps>`
  display: grid;
  gap: 1.25rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: ${(props) =>
      props.templateColumns || 'repeat(2, minmax(0, 1fr))'};
  }
`;

export const CategoryLabel = styled.p`
  --min: 0.85em;
  --val: 2.5vw;
  --max: 1em;
  display: inline-block;
  margin-top: 1.25rem;
  line-height: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: lowercase;
  color: violet;
  font-family: ${({ theme }) => theme.fonts.inter};
`;

export const ProjectTitleContainer = styled.div`
  margin-top: 0.5rem;
`;

export const ProjectTitle = styled.span`
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 1em;
  --val: 2.5vw;
  --max: 1.125em;
  letter-spacing: 0;
  font-weight: 500;
  background: linear-gradient(
      to right,
      rgba(100, 200, 200, 0),
      rgba(100, 200, 200, 0)
    ),
    linear-gradient(
      to right,
      rgba(91, 33, 182, 1),
      rgba(76, 29, 149, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 0.4em, 0 0.4em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
`;

export const ProjectImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #1f2937;
  transition-property: all;
  border-radius: 0.375rem;
  height: 350px;
`;

export const StyledProjectImage = styled(Image)`
  height: 100%;
  width: 100%;
  transition: 0.3s ease;
  position: relative;
`;

export const ProjectTransitionImage = styled(Image)`
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
  position: absolute;
  transition: 0.3s ease;
`;

export const ProjectStyledContainer = styled.div`
  margin-bottom: 1.5rem;

  &:hover ${ProjectTitle} {
    background-size: 0 0.4em, 100% 0.4em;
  }

  &:hover ${ProjectTransitionImage} {
    opacity: 1;
  }

  &:hover ${StyledProjectImage} {
    transform: scale(1.035);
  }
`;

export const ProjectLinksContainer = styled.div`
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 0.95em;
  --val: 2.5vw;
  --max: 1em;
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProjectLink = styled.a`
  position: relative;
  z-index: 50;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #af00ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Dot = styled.span`
  margin: 0 0.5rem;
`;
