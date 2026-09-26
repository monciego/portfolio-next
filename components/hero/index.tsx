import { FolderClosedIcon, User2Icon } from 'lucide-react';
import type { ProjectSummary } from '@/lib/utils';
import type { Testimonial } from '@/lib/velite';
import type { WritingSummary } from '@/lib/writing-categories';
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
import { Terminal } from '../terminal';

export interface IHeroProps {
  projects: ProjectSummary[];
  testimonials: Testimonial[];
  writings: WritingSummary[];
}

export const Hero: React.FunctionComponent<IHeroProps> = ({
  projects,
  testimonials,
  writings,
}) => {
  return (
    <HeroContainer>
      <RadialGradient />
      <HeroName>Jericho Bantiquete</HeroName>
      <HeroTitle>
        indie software <br /> developer
      </HeroTitle>
      <HeroSubTitle>
        {/* The animated verb is CSS ::before content, which crawlers and
            screen readers don't reliably read — so the real word is in the
            HTML (visually hidden) and the animation is aria-hidden.
            Kept inside one wrapper span so the .responsive letters'
            nth-of-type animation delays below don't shift. */}
        I{' '}
        <span>
          <span className="change-text" aria-hidden="true"></span>
          <span className="sr-only">create</span>
        </span>{' '}
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

      <Terminal
        projects={projects}
        testimonials={testimonials}
        writings={writings}
      />
    </HeroContainer>
  );
};
