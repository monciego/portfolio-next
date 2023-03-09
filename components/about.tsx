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
          I love to design and create responsive websites or web apps from
          scratch. The technologies, tools and languages I am using to build my
          personal projects are HTML5, CSS3, JavaScript, REACT JS, TailwindCSS,
          NEXT, Bootstrap, PHP Laravel, Git and GitHub, Figma and VS Code. And I
          am currently learning Data Structures & Algorithm, Astro JS, Python,
          NEXT13 (app directory) and GO.
        </AboutDescription>
        <AboutDescription>
          I have eagerness to learn something new every day and I love to share
          my knowledge to my fellow students and developers. And I am looking
          forward to talk with you!
        </AboutDescription>
      </AboutDescriptionContainer>
      <ResumeLinkContainer>
        <ResumeLink
          href="/documents/resume.pdf"
          download="resume-jericho-bantiquete"
        >
          Download Resume
        </ResumeLink>
        <DownloadIcon />
      </ResumeLinkContainer>
    </AboutContainer>
  );
};
