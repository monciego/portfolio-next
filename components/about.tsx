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
          Kumusta, My name is Jericho P. Bantiquete, a bachelorߴs degree holder
          with experience in web development and a passion for software
          development. I am currently based in the Philippines, where I enjoy
          building and improving things. I also freelance.
        </AboutDescription>
        <AboutDescription>
          I have a passion for bringing ideas to life. In my personal and
          freelance projects, I dive into an exciting toolbox that includes
          HTML5, CSS3, Laravel, JavaScript, React with TypeScript, TailwindCSS,
          shadcn/ui, Clerk, styled components, Next.js with TypeScript, Vue3,
          Inertia, Livewire, Progressive Web App (PWA) MySQL, Alpine.js, Git,
          GitHub, Figma, and VIM. Currently, I am expanding my skills by delving
          into Vim/Neovim, enhancing my understanding of Data Structures &
          Algorithms, exploring Golang, HTMX, Astro, and machine learning.
          Additionally, I have a foundational grasp of programming languages
          like C, C++, Java, and Python, which I learned during my time at
          university. I am constantly learning about web development, and I am
          slowly immersing myself in the wider realm of software development in
          general. My next target to learn is Linux, cloud computing, CI/CD,
          artificial intillegence, mobile, and desktop development. I am also
          offering assistance in developing systems for those in their
          bachelor’s or master’s degree and have experience in developing
          government websites, ensuring user-friendly interfaces and robust
          functionalities for seamless public interaction.
        </AboutDescription>

        <AboutDescription>
          I have eagerness to learn something new every day and I love to share
          my knowledge to my fellow students and developers. I am passionate
          about continuous growth and am always seeking opportunities to expand
          my skills and expertise. And I am looking forward to talk with you!
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
