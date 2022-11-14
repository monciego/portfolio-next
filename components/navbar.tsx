import Link from 'next/link';
import Logo from 'public/images/logo.svg';
import React, { useState } from 'react';
import {
  AnimatedBurgerButton,
  AnimatedBurgerDiv,
  AnimatedBurgerFirstSpan,
  AnimatedBurgerSecondSpan,
  AnimatedBurgerThirdSpan,
  StyledAnimatedBurger,
  StyledNavbar,
} from '../styles/Navbar.styled';

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavbar>
      <Link href="/" passHref>
        <a>
          <Logo style={{ cursor: 'pointer' }} />
        </a>
      </Link>
      <StyledAnimatedBurger>
        <nav>
          <AnimatedBurgerButton onClick={() => setOpen(!open)}>
            <AnimatedBurgerDiv>
              <AnimatedBurgerFirstSpan isOpen={open} />
              <AnimatedBurgerSecondSpan isOpen={open} />
              <AnimatedBurgerThirdSpan isOpen={open} />
            </AnimatedBurgerDiv>
          </AnimatedBurgerButton>
        </nav>
      </StyledAnimatedBurger>
    </StyledNavbar>
  );
};

export default Navbar;
