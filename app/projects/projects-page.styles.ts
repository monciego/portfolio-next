import Link from 'next/link';
import styled from 'styled-components';

export const BackLink = styled(Link)`
  display: inline-block;
  color: #3b82f6;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  margin-bottom: 1rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;
