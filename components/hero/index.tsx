import React from 'react';
import { Button } from '../ui/button';
import {
  HeroContainer,
  HeroName,
  HeroSubTitle,
  HeroTitle,
  RadialGradient,
} from './hero.styles';

export interface IHeroProps {}

export const Hero: React.FunctionComponent<IHeroProps> = () => {
  return (
    <HeroContainer>
      <RadialGradient />
      <HeroName>Jericho Bantiquete</HeroName>
      <HeroTitle>
        software dev <br /> engineer
      </HeroTitle>
      <HeroSubTitle>
        I <span className="change-text"></span>{' '}
        <span className="responsive">t</span>
        <span className="responsive">h</span>
        <span className="responsive">i</span>
        <span className="responsive">n</span>
        <span className="responsive">g</span>
        <span className="responsive">s</span> with my keyboard
      </HeroSubTitle>
      <Button href="#projects">Explore Projects</Button>
    </HeroContainer>
  );
};
