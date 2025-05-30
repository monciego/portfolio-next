import Image from 'next/legacy/image';
import styled from 'styled-components';

export const TestimonialsContainer = styled.section``;

export const TestimonialCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0.9rem;
  grid-row-gap: 0.9rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialStyledCard = styled.figure`
  position: relative;
  padding: 1.8rem;
  border-radius: 0.5rem;
  background: #19181a;
  line-height: 1.25rem;
`;

export const TestimonialContainer = styled.figcaption``;

export const AvatarContainer = styled.div`
  position: relative;
  margin-top: 0.25rem;
  flex-shrink: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 9999px;
  border: 1px solid #858585;
`;

export const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TestimonialAvatar = styled(Image)`
  border-radius: 9999px;
`;

export const TestimonialInformation = styled.div``;

export const TestimonialName = styled.p`
  --min: 1em;
  --val: 2.5vw;
  --max: 1.2em;
  line-height: 1.25rem;
  font-weight: 500;
`;

export const TestimonialPosition = styled.p`
  --min: 0.8em;
  --val: 2.5vw;
  --max: 1em;
  color: #d9dde1;
  margin-top: 0.15rem;
`;
