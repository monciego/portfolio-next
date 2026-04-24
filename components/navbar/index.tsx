'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
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

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Stable reference — does not change between renders.
  // Always closes the nav (nav links should never toggle, only close).
  const closeNav = useCallback(() => setOpen(false), []);

  return (
    <StyledNavbar className="container">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <AnimatedBurger isOpen={open} setOpen={setOpen} />
      <NavigationOverlay $isOpen={open}>
        <NavigationLists>
          {NAV_LINKS.map(({ label, href }) => (
            <NavigationList key={label}>
              <NavigationLink onClick={closeNav} href={href}>
                {label}
              </NavigationLink>
            </NavigationList>
          ))}
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
