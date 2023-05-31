import styled from 'styled-components';

export const MantraContainer = styled.div`
  width: 100%;
  height: 70vh;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 45vh;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 38vh;
  }
`;

export const MantraText = styled.h3`
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 1.25em;
  --val: 3vw;
  --max: 2.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 800;
  color: white;
  width: 100%;
  font-weight: 700;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.syncopate};
`;
