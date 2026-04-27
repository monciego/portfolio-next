import Image from 'next/image';
import styled from 'styled-components';

export const ProjectDetailsContainer = styled.section``;

export const ProjectSubtitle = styled.span`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.bunch};
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  display: flex;
  justify-content: center;
  color: violet;
  font-weight: 500;
  letter-spacing: 0.15em;
`;

export const ProjectDetailsTitle = styled.h2`
  --min: 1.2em;
  --val: 4.5vw;
  --max: 2rem;
  font-family: ${({ theme }) => theme.fonts.inter};
  letter-spacing: -0.025em;
  margin: 0.75rem auto 1.5rem auto;
  font-weight: 600;
  text-align: center;
  width: 100%;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 50%;
  }
`;

export const ProjectDetailImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem auto 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 70%;
  }
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.03),
    0 25px 60px rgba(0, 0, 0, 0.55),
    0 0 80px rgba(152, 146, 227, 0.07);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 35%;
    background: linear-gradient(to bottom, transparent, rgba(9, 9, 11, 0.35));
    pointer-events: none;
    z-index: 1;
  }
`;

export const ProjectDetailImage = styled(Image)`
  width: 100% !important;
  height: auto !important;
  max-height: 480px;
  object-fit: cover;
  display: block;
  border-radius: 14px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin: 2rem auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 60%;
  }
`;

export const LinkContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
`;
