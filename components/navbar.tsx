import Link from 'next/link';
import Logo from 'public/images/logo.svg';
import React, { useState } from 'react';
import { StyledNavbar } from '../styles/Navbar.styled';
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
    </StyledNavbar>
  );
};

export default Navbar;
