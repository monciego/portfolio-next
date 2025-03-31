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
    <AboutContainer id="about">
      <SectionHeading
        titleNumber="02"
        sectionTitle="about"
        sectionDetails="n. an organism that turns caffeine into software."
      />
      <AboutImage />
      <AboutDescriptionContainer>
        <AboutDescription>
          Kumusta! My name is Jericho P. Bantiquete. I am a developer,
          freelancer, and aspiring entrepreneur. I graduated with a Bachelor’s
          degree in Information Technology from Pangasinan State University. I
          am currently based in the Philippines, where I am building a product
          as a partner in a startup and also taking on freelance work.
        </AboutDescription>
        <AboutDescription>
          Throughout my career, I have worked with a variety of technologies,
          including JavaScript, TypeScript, React, NextJs, Angular, RxJS, Akita,
          Vue, Laravel, Livewire, Inertia.js, Tailwind CSS, MySQL, Figma, Git,
          GitHub, and more. While some of these are not my primary areas of
          expertise, I have gained valuable experience using them in both
          freelance projects and industry roles. My current tech stack, where I
          find the most productivity and which I primarily use for my projects,
          includes Laravel with React and TypeScript, utilizing Inertia.js,
          shadcn and Tailwind CSS for styling. For the database, I typically use
          MySQL or SQLite. Overall, my stack revolves around the Laravel
          ecosystem.
        </AboutDescription>

        <AboutDescription>
          Currently, I am continuously learning about data structures and
          algorithms. Additionally, I am exploring and expanding my knowledge in
          various technologies such as Golang, Astro, Remix, Python, and Java.
          As I continue to enhance my skills, I am particularly interested in
          learning more about machine learning and artificial intelligence.
        </AboutDescription>
        <AboutDescription>
          Outside of programming, I enjoy playing chess, learning
          music—especially guitar, reading books, and listening to podcasts.
          I’ve created a list of books I’ve read and those I plan to read in the
          future, which you can check out{' '}
          <StyledNextLink href="/book-list">here</StyledNextLink>. I also love
          curating{' '}
          <StyledLink
            href="https://open.spotify.com/user/bwbn9zmf30zbwy254iksud8lc/playlists"
            target="__blank"
          >
            Spotify Playlists
          </StyledLink>
          . Additionally, I have set up a{' '}
          <StyledNextLink href={`/gallery`}>gallery</StyledNextLink> with some
          photos, in case you’re curious to see a bit more about me.
        </AboutDescription>

        <AboutDescription>I use vim, btw.</AboutDescription>
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
