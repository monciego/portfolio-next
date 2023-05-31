import styled from 'styled-components';

export const FooterStyled = styled.footer`
  margin-top: 2rem;
`;

export const FooterSubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterSubTitle = styled.span`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 0.75em;
  --val: 2.5vw;
  --max: 1em;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -6%;
    background: ${({ theme }) => theme.colors.lightViolet};
    height: 5px;
    width: 5px;
    border-radius: 15px;
    transform: translate(-50%, -50%);
  }
`;

export const FooterTitleContainer = styled.div`
  text-align: center;
  margin: 3rem 0;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 1.85rem 0;
  }
`;

export const FooterTitle = styled.a`
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 2em;
  --val: 4vw;
  --max: 3.5em;
  font-weight: 800;
  position: relative;
  width: 100%;
  letter-spacing: 1px;
  color: white;
  font-family: ${({ theme }) => theme.fonts.syncopate};
  text-transform: uppercase;
  background: linear-gradient(
      to right,
      rgba(100, 200, 200, 0),
      rgba(100, 200, 200, 0)
    ),
    linear-gradient(to right, #f0f0f0, #f0f0f0, #f0f0f0);
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:hover {
    background-size: 0 0.1em, 100% 0.1em;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    --val: 3vw;
  }
`;

export const FooterContacts = styled.div`
  display: flex;
  gap: 5rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 0;
  }
`;

export const FooterContact = styled.div`
  position: relative;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-bottom: 1rem;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 50%;
      background: #1a1a1a;
    }

    &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 25%;
      background: #a8aca3;
      bottom: 0;
      left: 0;
    }
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    &::before {
      content: '';
      width: 100%;
    }

    &::after {
      content: '';
      width: 50%;
    }
  }
`;

export const ContactHeader = styled.p`
  --min: 0.95em;
  --val: 2.5vw;
  --max: 1.2em;
  margin: 3rem 0 0.5rem 0;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 2rem 0 0.5rem 0;
  }
`;

export const ContactLink = styled.a`
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 0.85em;
  --val: 2.5vw;
  --max: 1em;
  letter-spacing: 1px;
  color: #8c8c8c;
  transition: 0.3s ease;
  position: relative;

  &:hover {
    color: white;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 1px;
    border-radius: 5px;
    background: white;
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const FooterSocials = styled.span`
  display: flex;
  gap: 0.85rem;
`;

export const FooterArrowLine = styled.div`
  position: relative;
`;

export const FooterLine = styled.hr`
  margin-top: 3rem;
  border: none;
  height: 0.2px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
`;

export const ArrowToTop = styled.div`
  height: 60px;
  width: 60px;
  background: rgba(255, 255, 255, 0.05);
  background-image: url('/images/icon-arrow-up.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 10px 16px;
  position: absolute;
  right: 0;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #7b3cc4;
    background-image: url('/images/icon-arrow-up.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 10px 16px;
  }

  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 4rem;
    background-color: rgba(255, 255, 255, 0.05);
    position: absolute;
    top: -6rem;
    left: 50%;
  }

  &::after {
    content: 'back to top';
    display: block;
    width: 150px;
    font-size: 0.8rem;
    line-height: 30px;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: rgba(255, 255, 255, 0.15);
    transition: all 0.5s;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    position: absolute;
    left: calc(30px + 15px);
    top: -140px;
    pointer-events: none;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    &::before,
    &::after {
      display: none;
    }
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 45px;
    width: 45px;
  }
`;

export const Copyright = styled.div`
  padding-top: 1rem;
  color: #8c8c8c;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 0.85rem;
  }
`;

export const Small = styled.a`
  &:hover {
    color: white;
    transition: all 0.5s;
  }
`;
