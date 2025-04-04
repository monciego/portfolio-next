'use client';

import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSocials,
  FooterStyled,
  FooterSubTitle,
  FooterSubTitleContainer,
  FooterTitle,
  FooterTitleContainer,
  Small,
} from './footer.styles';

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

export interface IFooterProps {}

export const Footer: React.FunctionComponent<IFooterProps> = () => {
  const year = new Date().getFullYear();
  return (
    <FooterStyled>
      <FooterSubTitleContainer>
        <FooterSubTitle>get in touch</FooterSubTitle>
      </FooterSubTitleContainer>
      <FooterTitleContainer>
        <FooterTitle
          href="mailto:jerichobantiquete@gmail.com"
          data-hover="Let's talk!"
        >
          {' '}
          Need a developer?
        </FooterTitle>
      </FooterTitleContainer>

      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactLink href="tel:+639951076206">+639951076206</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{' '}
          <FooterSocials>
            <ContactLink
              href="https://github.com/monciego"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/jericho-bantiquete-450541179/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://twitter.com/monciego"
              target="_blank"
              rel="noopener noreferrer"
            >
              𝕏 (formerly twitter)
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Letߴs grab a coffee.</ContactHeader>
          <ContactLink href="tel:+639951076206">
            jerichobantiquete@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{' '}
          <Small
            href="https://github.com/monciego"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jericho Bantiquete
          </Small>
        </small>
      </Copyright>
    </FooterStyled>
  );
};
