import { ABOUT_PARAGRAPHS } from '@/lib/portfolio-data';
import { SectionHeading } from '../ui/section-heading';
import { AboutImage } from './about-images';
import {
  AboutContainer,
  AboutDescription,
  AboutDescriptionContainer,
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
        {/* Paragraphs 0–2 and 4 come directly from the shared data file.
            Edit lib/portfolio-data.ts — this section and the terminal
            "about" command both update automatically. */}
        <AboutDescription>{ABOUT_PARAGRAPHS[0]}</AboutDescription>
        <AboutDescription>{ABOUT_PARAGRAPHS[1]}</AboutDescription>
        <AboutDescription>{ABOUT_PARAGRAPHS[2]}</AboutDescription>
        <AboutDescription>{ABOUT_PARAGRAPHS[3]}</AboutDescription>

        {/* Paragraph 4 — same content as ABOUT_PARAGRAPHS[4] but rendered
            with inline Next.js <Link> components around specific words.
            When you update the text in portfolio-data.ts, mirror the change
            here so the linked version stays consistent. */}
        <AboutDescription>
          Outside of programming, I enjoy playing chess, learning
          music—especially guitar, reading books, and listening to podcasts. I
          also curate{' '}
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
          photos, in case you&apos;re curious to see a bit more about me.
        </AboutDescription>

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
