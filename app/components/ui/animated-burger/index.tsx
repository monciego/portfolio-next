import React from 'react';
import {
  AnimatedBurgerButton,
  AnimatedBurgerDiv,
  AnimatedBurgerFirstSpan,
  AnimatedBurgerSecondSpan,
  AnimatedBurgerThirdSpan,
  StyledAnimatedBurger,
} from './styles';

export interface IAnimatedBurgerProps {
  readonly isOpen: boolean;
  readonly setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnimatedBurger: React.FunctionComponent<IAnimatedBurgerProps> = ({
  isOpen,
  setOpen,
}) => {
  return (
    <StyledAnimatedBurger>
      <nav>
        <AnimatedBurgerButton onClick={() => setOpen(!isOpen)}>
          <AnimatedBurgerDiv>
            <AnimatedBurgerFirstSpan isOpen={isOpen} />
            <AnimatedBurgerSecondSpan isOpen={isOpen} />
            <AnimatedBurgerThirdSpan isOpen={isOpen} />
          </AnimatedBurgerDiv>
        </AnimatedBurgerButton>
      </nav>
    </StyledAnimatedBurger>
  );
};
