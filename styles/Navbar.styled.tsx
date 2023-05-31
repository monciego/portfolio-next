import styled from 'styled-components';

interface isOpenProps {
  readonly isOpen: boolean;
}

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 13vh;
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  z-index: 999;
`;

export const StyledAnimatedBurger = styled.div`
  display: relative;
  padding: 0.75rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 36rem;
  }
`;

export const AnimatedBurgerButton = styled.button`
  position: relative;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.white};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.125rem;
  cursor: pointer;
`;

export const AnimatedBurgerDiv = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.25rem;
  transform: translate(-50%, -50%);
`;

export const AnimatedBurgerFirstSpan = styled.span<isOpenProps>`
  display: block;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 1.25rem;
  height: 0.125rem;
  transform: translateY(-0.375rem);
  transform: ${({ isOpen }) =>
    isOpen ? 'rotate(45deg)' : 'translateY(-0.375rem)'};
`;

export const AnimatedBurgerSecondSpan = styled.span<isOpenProps>`
  display: block;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 1.25rem;
  height: 0.125rem;
  opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
`;

export const AnimatedBurgerThirdSpan = styled.span<isOpenProps>`
  display: block;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 1.25rem;
  height: 0.125rem;
  transform: translateY(0.375rem);
  transform: ${({ isOpen }) =>
    isOpen ? 'rotate(-45deg)' : 'translateY(0.375rem)'};
`;

export const NavigationOverlay = styled.nav<isOpenProps>`
  position: fixed;
  background: #0c0e13;
  z-index: -2;
  top: ${({ isOpen }) => (isOpen ? '0' : '-120%')};
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 4em;
  transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
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

export const NavigationLink = styled.a`
  font-size: clamp(var(--min), var(--val), var(--max));
  --min: 1.75em;
  --val: 2.5vw;
  --max: 2em;
  font-family: ${({ theme }) => theme.fonts.cardo};
  text-transform: uppercase;
  font-weight: 500;
`;

export const NavigationQuote = styled.span`
  font-family: ${({ theme }) => theme.fonts.cardo};
  font-style: italic;
  position: absolute;
  bottom: 2rem;
  left: 5%;
`;

export const NavigationSocials = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 5%;
  display: flex;
  gap: 1.5rem;
`;

export const NavigationSocial = styled.a`
  font-family: ${({ theme }) => theme.fonts.cardo};
`;
