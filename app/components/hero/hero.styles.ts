import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 2rem;
  }
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
  --min: 1em;
  --val: 2.5vw;
  --max: 1.5em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightViolet};
`;

export const HeroTitle = styled.h1`
  --min: 1.75em;
  --val: 6vw;
  --max: 5em;
  font-family: ${({ theme }) => theme.fonts.syncopate};
  text-transform: uppercase;
  text-align: center;
`;

export const HeroSubTitle = styled.p`
  --min: 0.85em;
  --val: 2.5vw;
  --max: 1.5em;
`;
