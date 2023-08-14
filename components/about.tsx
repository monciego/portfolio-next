import {
  AboutContainer,
  AboutDescription,
  AboutDescriptionContainer,
  DownloadIcon,
  ResumeLink,
  ResumeLinkContainer,
} from '../styles/About.styled';
import { AboutImage } from './about-image';
import { SectionHeading } from './section-heading';

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
          My name is Jericho P. Bantiquete, A bachelorߴs degree holder with web
          development experience and passion for responsive website design and a
          firm believer in the mobile-first approach. I am a passionate
          front-end developer based in Philippines.
        </AboutDescription>
        <AboutDescription>
          I absolutely love crafting and bringing to life responsive websites
          and web apps from scratch. For my personal and freelance projects, I
          dive into an exciting toolbox that includes HTML5, CSS3, JavaScript,
          React with TypeScript, TailwindCSS, shadcn/ui, Clerk, styled
          components, Next.js with TypeScript, PHP Laravel, MySQL, Alpine.js,
          Git, GitHub, Figma, and VS Code. Currently, Iߴm expanding my skills by
          learning about vim, improving my understanding of Data Structures &
          Algorithms, exploring Astro, looking into NEXT13 (app directory),
          diving into the T3 Stack, and studying GO. In addition, I have a basic
          grasp of programming languages like C, C++, Java, and Python, which I
          learned during my time at university. I am also offering assistance in
          developing systems for those in their bachelorߴs or masterߴs degree.
        </AboutDescription>

        <AboutDescription>
          I have eagerness to learn something new every day and I love to share
          my knowledge to my fellow students and developers. And I am looking
          forward to talk with you!
        </AboutDescription>
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
