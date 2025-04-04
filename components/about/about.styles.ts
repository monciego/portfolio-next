import { Download } from 'lucide-react';
import Link from 'next/link';
import styled from 'styled-components';

interface ImageProps {
  readonly $down?: boolean;
}

export const AboutContainer = styled.section`
  margin-bottom: 5rem;
`;

export const AboutImageContainer = styled.div`
  display: grid;
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 3rem;
  }
`;

export const ImageWrapper = styled.div<ImageProps>`
  position: relative;
  overflow: hidden;
  border-radius: 0.375rem;
  aspect-ratio: 1 / 1;
  transform: ${(props) => (props.$down ? 'translateY(3rem)' : 'translateY(0)')};
`;

export const AboutDescriptionContainer = styled.div`
  margin: 6rem auto 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 85%;
  }
`;

export const AboutDescription = styled.p`
  --min: 1em;
  --val: 2.5vw;
  --max: 1.125em;
  margin-bottom: 1rem;
  line-height: 1.5;
  color: #d1d5db;
`;

export const ResumeLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem auto 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 85%;
  }
`;

export const StyledLink = styled.a`
  color: #6366f1;
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: #4f46e5;
  }
`;

export const StyledNextLink = styled(Link)`
  color: #6366f1;
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: #4f46e5;
  }
`;

export const ResumeLink = styled.a`
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 1em;
  --val: 2.5vw;
  --max: 1.125em;
  padding-bottom: 0.5rem;
  font-weight: 600;
  position: relative;
  background: linear-gradient(to right, #d4e3e3, #c8d7d7),
    linear-gradient(to right, #21a0b6, #9892e3, #8798a9);
  background-size: 100% 0.125em, 0 0.125em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:hover {
    background-size: 0 0.125em, 100% 0.125em;
  }
`;

export const DownloadIcon = styled(Download)`
  padding-bottom: 0.5rem;
  height: 2rem;
`;
