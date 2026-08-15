'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatedBurger } from '../ui/animated-burger';
import Logo from '../ui/logo';
import {
  NavigationLink,
  NavigationList,
  NavigationLists,
  NavigationOverlay,
  NavigationQuote,
  NavigationSecondaryLink,
  NavigationSecondaryList,
  NavigationSocials,
  StyledNavbar,
} from './navbar.styles';

// Full hrefs so links work from any page, not just the home page
const NAV_LINKS = [
  { label: 'Home', href: '/', sectionId: '' },
  { label: 'Projects', href: '/#projects', sectionId: 'projects' },
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Experience', href: '/#experience', sectionId: 'experience' },
  { label: 'Testimonials', href: '/#testimonials', sectionId: 'testimonials' },
] as const;

const SECONDARY_LINKS = [
  { label: 'Writings', href: '/writings' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Book List', href: '/book-list' },
] as const;

const SECTION_IDS = NAV_LINKS.map((l) => l.sectionId).filter(Boolean);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const closeNav = useCallback(() => setOpen(false), []);

  // Hide on scroll-down, show on scroll-up
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 20) {
        setHidden(false);
      } else {
        setHidden(currentY > lastScrollY.current);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver (home page only)
  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  // Escape key closes overlay
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeNav();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeNav]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Never hide the navbar while the menu is open
  const effectiveHidden = hidden && !open;

  const isActive = (sectionId: string) => isHome && activeSection === sectionId;

  return (
    <StyledNavbar $hidden={effectiveHidden} className="container">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <AnimatedBurger isOpen={open} setOpen={setOpen} />
      <NavigationOverlay $isOpen={open}>
        <NavigationLists>
          {NAV_LINKS.map(({ label, href, sectionId }) => (
            <NavigationList key={label}>
              <NavigationLink
                $active={isActive(sectionId)}
                onClick={closeNav}
                href={href}
              >
                {label}
              </NavigationLink>
            </NavigationList>
          ))}

          <NavigationSecondaryList>
            {SECONDARY_LINKS.map(({ label, href }) => (
              <NavigationSecondaryLink
                key={label}
                href={href}
                onClick={closeNav}
              >
                {label}
              </NavigationSecondaryLink>
            ))}
          </NavigationSecondaryList>
        </NavigationLists>

        <NavigationQuote>travaille pour ça</NavigationQuote>
        <NavigationSocials>
          <a
            href="mailto:jerichobantiquete@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://github.com/monciego"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jericho-bantiquete-450541179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </NavigationSocials>
      </NavigationOverlay>
    </StyledNavbar>
  );
};

export default Navbar;
