import Link from 'next/link';
import styled from 'styled-components';

interface NavbarProps {
  readonly $hidden: boolean;
}

interface isOpenProps {
  readonly $isOpen: boolean;
}

interface activeLinkProps {
  readonly $active: boolean;
}

export const StyledNavbar = styled.nav<NavbarProps>`
  position: fixed;
  top: ${({ $hidden }) => ($hidden ? '-5rem' : '0')};
  right: 0;
  left: 0;
  height: 6rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  z-index: 999;
  transition: top 0.35s ease;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

export const NavigationOverlay = styled.nav<isOpenProps>`
  position: fixed;
  background: #0c0e13;
  z-index: -2;
  top: ${({ $isOpen }) => ($isOpen ? '0' : '-120%')};
  left: 0;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  padding: 4em;
  transition: top 0.85s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const NavigationLists = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
  padding-bottom: 5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-bottom: 3rem;
  }
`;

export const NavigationList = styled.li``;

export const NavigationLink = styled(Link)<activeLinkProps>`
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 1.75em;
  --val: 2.5vw;
  --max: 3em;
  text-transform: uppercase;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.bunch};
  color: ${({ $active }) => ($active ? 'violet' : 'inherit')};
  transition: color 0.2s ease;

  &:hover {
    color: violet;
  }
`;

export const NavigationSecondaryList = styled.li`
  display: flex;
  gap: 1.75rem;
`;

export const NavigationSecondaryLink = styled(Link)`
  font-size: clamp(0.85em, 1.8vw, 1.1em);
  text-transform: uppercase;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.bunch};
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const NavigationQuote = styled.span`
  font-style: italic;
  position: absolute;
  bottom: 2rem;
  left: 5%;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 7.5%;
  }
`;

export const NavigationSocials = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 5%;
  display: flex;
  gap: 1.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    right: 7.5%;
  }

  a {
    color: #6b7280;
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
    }
  }
`;
