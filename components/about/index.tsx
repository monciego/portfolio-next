import { ABOUT_PARAGRAPHS } from '@/lib/portfolio-data';
import { SectionHeading } from '../ui/section-heading';
import { AboutImage } from './about-images';
import {
  AboutContainer,
  AboutDescription,
  AboutDescriptionContainer,
  AboutSectionTitle,
  DownloadIcon,
  ResumeLink,
  ResumeLinkContainer,
  StyledLink,
  StyledNextLink,
} from './about.styles';

export interface IAboutProps {}

export const About: React.FunctionComponent<IAboutProps> = () => {
  return (
    <AboutContainer id="about" className="container">
      <SectionHeading
        titleNumber="02"
        sectionTitle="about"
        sectionDetails="n. an organism that turns caffeine into software."
      />
      <AboutImage />
      <AboutDescriptionContainer>
        {/* Paragraph 0 — Introduction */}
        <AboutDescription>{ABOUT_PARAGRAPHS[0]}</AboutDescription>

        {/* Paragraph 1 — Primary Focus */}
        <AboutDescription>{ABOUT_PARAGRAPHS[1]}</AboutDescription>

        {/* ── Learning & Experimenting ── */}
        <AboutSectionTitle>Learning & Experimenting</AboutSectionTitle>
        <AboutDescription>{ABOUT_PARAGRAPHS[2]}</AboutDescription>

        {/* ── Writing, Journaling & Reading ── */}
        <AboutSectionTitle>Writing, Journaling & Reading</AboutSectionTitle>
        <AboutDescription>
          I enjoy journaling and writing down thoughts, realizations, and things
          I&apos;m learning. It has become a way for me to reflect on my work,
          understand how I think, and keep track of things I might otherwise
          forget. I also enjoy reading books, particularly as a way of
          continuously learning outside of programming. I keep a list of books
          I&apos;ve read and want to read, which you can find{' '}
          <StyledNextLink href="/book-list">here</StyledNextLink>. I&apos;ve
          also started sharing some of my shorter reflections about learning,
          growth, technology, and building things, which you can explore{' '}
          <StyledNextLink href="/writings">here</StyledNextLink>.
        </AboutDescription>

        {/* ── Tools ── */}
        <AboutSectionTitle>Tools</AboutSectionTitle>
        <AboutDescription>
          I use{' '}
          <StyledLink
            href="https://github.com/monciego/dotfiles"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vim and Zed
          </StyledLink>{' '}
          as my primary editors. I&apos;ve also been gradually building and
          maintaining my own{' '}
          <StyledLink
            href="https://github.com/monciego/dotfiles"
            target="_blank"
            rel="noopener noreferrer"
          >
            dotfiles
          </StyledLink>{' '}
          as I experiment with my development environment and make my tools feel
          more like my own.
        </AboutDescription>

        {/* ── Outside of Code ── */}
        <AboutSectionTitle>Outside of Code</AboutSectionTitle>
        <AboutDescription>
          Outside of programming, I enjoy playing chess, learning guitar,
          reading books, listening to podcasts, and journaling. I also curate{' '}
          <StyledLink
            href="https://open.spotify.com/user/bwbn9zmf30zbwy254iksud8lc/playlists"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify playlists
          </StyledLink>{' '}
          and keep a list of books I&apos;ve read and plan to read, which you
          can check out <StyledNextLink href="/book-list">here</StyledNextLink>.
          I&apos;ve also started writing short reflections and realizations
          about learning, growth, and technology, which you can explore{' '}
          <StyledNextLink href="/writings">here</StyledNextLink>. Additionally,
          I&apos;ve set up a{' '}
          <StyledNextLink href="/gallery">gallery</StyledNextLink> with some
          photos, in case you&apos;re curious to see a little more about my life
          outside of software.
        </AboutDescription>

        {/* Closing (index 5) */}
        <AboutDescription>{ABOUT_PARAGRAPHS[5]}</AboutDescription>
      </AboutDescriptionContainer>
      <ResumeLinkContainer>
        <ResumeLink
          href="/documents/resume-jericho-bantiquete.pdf"
          download="resume-jericho-bantiquete"
        >
          Download Resume
        </ResumeLink>
        <DownloadIcon />
      </ResumeLinkContainer>
    </AboutContainer>
  );
};
