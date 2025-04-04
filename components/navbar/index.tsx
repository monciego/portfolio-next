'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatedBurger } from '../ui/animated-burger';
import Logo from '../ui/logo';
import {
  NavigationLink,
  NavigationList,
  NavigationLists,
  NavigationOverlay,
  NavigationQuote,
  NavigationSocials,
  StyledNavbar,
} from './navbar.styles';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavbar className="container">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <AnimatedBurger isOpen={open} setOpen={setOpen} />
      <NavigationOverlay $isOpen={open}>
        <NavigationLists>
          <NavigationList>
            <NavigationLink onClick={() => setOpen(!open)} href="#">
              Home
            </NavigationLink>
          </NavigationList>
          <NavigationList>
            <NavigationLink onClick={() => setOpen(!open)} href="#projects">
              Projects
            </NavigationLink>
          </NavigationList>
          <NavigationList>
            <NavigationLink onClick={() => setOpen(!open)} href="#about">
              About
            </NavigationLink>
          </NavigationList>
          <NavigationList>
            <NavigationLink onClick={() => setOpen(!open)} href="#testimonials">
              Testimonials
            </NavigationLink>
          </NavigationList>
        </NavigationLists>
        <NavigationQuote>travaille pour ça</NavigationQuote>
        <NavigationSocials>
          <a
            href="mailto:jerichobantiquete@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gm
          </a>
          <a
            href="https://github.com/monciego"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gh
          </a>
          <a
            href="https://www.linkedin.com/in/jericho-bantiquete-450541179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ln
          </a>
        </NavigationSocials>
      </NavigationOverlay>
    </StyledNavbar>
  );
};

export default Navbar;
