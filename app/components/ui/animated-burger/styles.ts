import styled from 'styled-components';

interface isOpenProps {
  readonly isOpen: boolean;
}
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
