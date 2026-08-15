import { FolderClosedIcon, User2Icon } from 'lucide-react';
import React from 'react';
import {
  ActionButton,
  ActionButtonChip,
  ActionButtonContainer,
} from '../ui/button';
import {
  HeroContainer,
  HeroLinks,
  HeroLinksContainer,
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
        indie fullstack <br /> developer
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
      <ActionButtonContainer>
        <ActionButton href="#projects">
          <FolderClosedIcon style={{ height: '1rem' }} />
          Explore Projects
          <ActionButtonChip>↵</ActionButtonChip>
        </ActionButton>
        <ActionButton href="#about" variant="secondary">
          <User2Icon style={{ height: '1rem' }} />
          Learn About Me
          <ActionButtonChip>→</ActionButtonChip>
        </ActionButton>
      </ActionButtonContainer>
      <HeroLinksContainer>
        <HeroLinks href="/writings">my writings </HeroLinks>·
        <HeroLinks href="/book-list">book list </HeroLinks>
      </HeroLinksContainer>
    </HeroContainer>
  );
};
