import Link from 'next/link';
import Logo from 'public/images/logo.svg';
import React, { useState } from 'react';
import {
  NavigationLink,
  NavigationList,
  NavigationLists,
  NavigationOverlay,
  NavigationQuote,
  NavigationSocial,
  NavigationSocials,
  StyledNavbar,
} from '../styles/Navbar.styled';
import { AnimatedBurger } from './animated-burger';

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
      <AnimatedBurger isOpen={open} setOpen={setOpen} />
      <NavigationOverlay isOpen={open}>
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
          <NavigationSocial
            href="mailto:jerichobantiquete@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gm
          </NavigationSocial>
          <NavigationSocial
            href="https://github.com/monciego"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gh
          </NavigationSocial>
          <NavigationSocial
            href="https://www.linkedin.com/in/jericho-bantiquete-450541179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ln
          </NavigationSocial>
        </NavigationSocials>
      </NavigationOverlay>
    </StyledNavbar>
  );
};

export default Navbar;
