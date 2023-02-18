import React from 'react';
import {
  HeroContainer,
  HeroName,
  HeroSubTitle,
  HeroTitle,
} from '../styles/Hero.styled';
import { Button } from './button';

export interface IHeroProps {}

export const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <HeroContainer>
      <HeroName>Jericho Bantiquete</HeroName>
      <HeroTitle>
        frontend web <br /> developer
      </HeroTitle>
      <HeroSubTitle>
        I <span className="change-text"></span>{' '}
        <span className="responsive">r</span>
        <span className="responsive">e</span>
        <span className="responsive">s</span>
        <span className="responsive">p</span>
        <span className="responsive">o</span>
        <span className="responsive">n</span>
        <span className="responsive">s</span>
        <span className="responsive">i</span>
        <span className="responsive">v</span>
        <span className="responsive">e</span> websites.
      </HeroSubTitle>
      <Button>Explore Projects</Button>
    </HeroContainer>
  );
};
