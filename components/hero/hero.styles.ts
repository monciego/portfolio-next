import styled from 'styled-components';
import Link from 'next/link';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const RadialGradient = styled.div`
  position: absolute;
  width: 32.5rem;
  height: 32.5rem;
  right: 0;
  top: -12.1875rem;
  z-index: -1;
  background: radial-gradient(
    42.61% 42.61% at 45.81% 57.39%,
    rgba(54, 19, 191, 0.29) 0%,
    rgba(27, 13, 84, 0) 100%
  );

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    right: -10.625rem;
    width: 37.1875rem;
    height: 37.1875rem;
  }
`;

export const HeroName = styled.h2`
  --min: 0.85em;
  --val: 2.5vw;
  --max: 1.35em;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.lightViolet};
`;

export const HeroTitle = styled.h1`
  --min: 2.65em;
  --val: 6vw;
  --max: 5.5em;
  line-height: 0.9;
  font-family: ${({ theme }) => theme.fonts.bunch};
  text-transform: uppercase;
  text-align: center;
`;

export const HeroSubTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  --min: 0.9em;
  --val: 2.5vw;
  --max: 1.35em;
`;

export const HeroLinksContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const HeroLinks = styled(Link)`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.mono};

  &:hover {
    color: ${({ theme }) => theme.colors.lightViolet};
  }
`;
