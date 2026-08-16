import styled from 'styled-components';

interface sectionHeadingProps {
  readonly $number: string;
}

export const SectionStyledHeading = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2<sectionHeadingProps>`
  --min: 2.5em;
  --val: 4.5vw;
  --max: 4.5em;
  position: relative;
  margin-bottom: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 1;
  color: #f2f2f2;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.bunch};

  &::after {
    position: absolute;
    content: '${(props) => props.$number}';
    left: 5%;
    top: 0;
    transform: translate(-50%, -50%);
    color: rgba(29, 32, 36, 0.3);
    z-index: -1;
    font-family: ${({ theme }) => theme.fonts.playfairDisplay};
    font-size: 9.5rem;
    font-weight: 700;
  }
`;

export const SectionDetails = styled.p`
  --min: 0.85em;
  --val: 2.5vw;
  --max: 1em;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: #eee6e6;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
  }
`;

export const SectionHeadingLink = styled.a`
  color: ${({ theme }) => theme.colors.lightViolet};
  text-decoration: underline;
`;
