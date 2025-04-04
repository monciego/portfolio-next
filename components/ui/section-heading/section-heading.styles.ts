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
  --min: 2em;
  --val: 4.5vw;
  --max: 7em;
  margin-bottom: 1.5rem;
  position: relative;
  font-weight: 800;
  text-transform: uppercase;
  z-index: 1;
  color: #f2f2f2;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.syncopate};

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

    @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 7rem;
    }

    @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 6rem;
    }
  }
`;

export const SectionDetails = styled.p`
  --min: 1em;
  --val: 2.5vw;
  --max: 1.25em;
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: #eee6e6;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 90%;
  }
`;

export const SectionHeadingLink = styled.a`
  color: ${({ theme }) => theme.colors.lightViolet};
  text-decoration: underline;
`;
