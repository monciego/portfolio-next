import React from 'react';
import {
  HeroContainer,
  HeroName,
  HeroSubTitle,
  HeroTitle,
} from './hero.styles';
/* import { Button } from './button'; */

export interface IHeroProps {}

export const Hero: React.FunctionComponent<IHeroProps> = () => {
  return (
    <HeroContainer>
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
      {/*       <Button href="#projects">Explore Projects</Button> */}
    </HeroContainer>
  );
};
