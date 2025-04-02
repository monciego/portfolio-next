import Image from 'next/legacy/image';
import styled from 'styled-components';

export const ProjectDetailsContainer = styled.section``;

export const ProjectSubtitle = styled.span`
  display: flex;
  justify-content: center;
  color: violet;
  font-weight: 500;
`;

export const ProjectDetailsTitle = styled.h2`
  --min: 1.115em;
  --val: 4.5vw;
  --max: 2rem;
  font-family: ${({ theme }) => theme.fonts.inter};
  line-height: 2.25rem;
  letter-spacing: -0.025em;
  margin: 0.75rem auto 1.5rem auto;
  font-weight: 600;
  text-align: center;
  width: 100%;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 65%;
  }
`;

export const ProjectDetailImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectDetailImage = styled(Image)`
  object-fit: cover;
  width: 50%;
  border-radius: 10px;
`;

export const ContentContainer = styled.div`
  width: 90%;
  margin: 2rem auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
  }
`;

export const LinkContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
`;
