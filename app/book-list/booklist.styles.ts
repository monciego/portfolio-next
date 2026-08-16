import Link from 'next/link';
import { styled } from 'styled-components';

export const PageWrapper = styled.main`
  padding-top: 6rem;
  padding-bottom: 5rem;
`;

export const Inner = styled.div`
  width: 90%;
  margin: 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 70%;
  }
`;

export const BackLink = styled(Link)`
  display: inline-block;
  color: #3b82f6;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  margin-bottom: 2.75rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

export const PageTitle = styled.h1`
  --min: 2.75em;
  --val: 8vw;
  --max: 4.5em;
  font-family: ${({ theme }) => theme.fonts.bunch};
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 700;
  line-height: 0.95;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

export const Subtitle = styled.p`
  --min: 0.9em;
  --val: 2.5vw;
  --max: 1.05em;
  color: #9ca3af;
  font-family: ${({ theme }) => theme.fonts.inter};
  margin-bottom: 3.75rem;
`;

export const BookSection = styled.div`
  margin-bottom: 3.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const SectionLabel = styled.h2`
  --min: 0.7em;
  --val: 1.8vw;
  --max: 0.82em;
  font-family: ${({ theme }) => theme.fonts.bunch};
  text-transform: uppercase;
  color: violet;
  font-weight: 500;
  letter-spacing: 0.18em;
  margin-bottom: 1rem;
`;

export const BookList = styled.ul``;

export const BookItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.07);
  }
`;

export const BookTitle = styled.span`
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 400;
`;

export const BookAuthor = styled.span`
  color: #6b7280;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: clamp(0.775rem, 1.8vw, 0.875rem);
  text-align: right;
  flex-shrink: 0;
`;
