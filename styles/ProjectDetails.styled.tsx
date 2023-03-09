import Image from 'next/image';
import styled from 'styled-components';

export const ProjectDetailsContainer = styled.section``;

export const ProjectSubtitle = styled.span`
  display: flex;
  justify-content: center;
  color: violet;
`;

export const ProjectDetailsTitle = styled.h2`
  --min: 1.115em;
  --val: 4.5vw;
  --max: 2rem;
  font-family: ${({ theme }) => theme.fonts.inter};
  line-height: 1.275;
  letter-spacing: -0.025em;
  margin: 0.75rem auto 0.9rem auto;
  font-weight: 600;
  text-align: center;
  width: 80%;
`;

export const ProjectDetailImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
`;

export const ContentContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
`;

export const LinkContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
`;
