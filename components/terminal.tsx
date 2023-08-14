import React, { useEffect, useRef, useState } from 'react';
import {
  BlueText,
  Command,
  CommandDescription,
  CommandTitle,
  GreenTerminalButton,
  GreenText,
  RedTerminalButton,
  StyledTerminal,
  TerminalButtons,
  TerminalContent,
  TerminalHeader,
  TerminalHeaderLink,
  TerminalHeaderTitle,
  TextContainer,
  VioletText,
  YellowTerminalButton,
  YellowText,
} from '../styles/Terminal.styled';

/* ugly code need to refactor */

const commands = [
  {
    id: 1,
    title: 'projects',
    description: 'Discover and explore my creation.',
  },
  {
    id: 2,
    title: 'about',
    description: 'Discover and learn more who i am.',
  },
  {
    id: 3,
    title: 'testimonials',
    description: 'Read what other people think about me',
  },
  {
    id: 4,
    title: 'socials',
    description: 'Displays my social networks. Let’s connect!',
  },
  {
    id: 5,
    title: 'clear',
    description: 'Cleans the terminal',
  },
  {
    id: 6,
    title: 'cd [command]',
    description: `Redirect to a specific section e.g cd about`,
  },
];

export interface ITerminalProps {}

export const Terminal: React.FunctionComponent<ITerminalProps> = () => {
  const [commandInput, setCommandInput] = useState('');
  const [allCommands, SetAllCommand] = useState(commands);
  const [viewCommands, setViewCommands] = useState(false);
  const [commandOutput, setCommandOutput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <StyledTerminal onClick={() => inputRef.current?.focus()}>
      <TerminalHeader>
        <TerminalButtons>
          <RedTerminalButton />
          <YellowTerminalButton />
          <GreenTerminalButton />
        </TerminalButtons>
        <TerminalHeaderTitle>
          <TerminalHeaderLink
            target="__blank"
            href="https://github.com/monciego"
          >
            github.com/monciego
          </TerminalHeaderLink>
        </TerminalHeaderTitle>
      </TerminalHeader>
      <TerminalContent>
        <TextContainer>
          <YellowText># user </YellowText>
          <VioletText>in </VioletText>
          <BlueText>~/monciego</BlueText>
        </TextContainer>
        <TextContainer>
          <GreenText>
            {viewCommands
              ? `> Type "hide" to hide all commands.`
              : `> Type "help" for all available commands.`}
          </GreenText>
        </TextContainer>

        {viewCommands &&
          allCommands.map((command) => (
            <Command key={command.id}>
              <CommandTitle>{command.title}</CommandTitle>
              <CommandDescription>{command.description}</CommandDescription>
            </Command>
          ))}
        <div
          className="terminal-output"
          dangerouslySetInnerHTML={{ __html: commandOutput }}
        ></div>
        <div>
          <GreenText>{'>'}</GreenText>{' '}
          <input
            className="input"
            type="text"
            ref={inputRef}
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            onKeyDown={(e) => {
              let newOutput: string = '';
              let currentURL = window.location.href;
              newOutput = `${commandOutput} <h2><span>> </span>${commandInput}<h2> `;
              switch (commandInput.toLowerCase().trim()) {
                case 'projects':
                  newOutput += `<h4>
                      <a target="__blank" href="https://umatter.netlify.app/">• a meditation app</a>
                  </h4>`;
                  newOutput += `<h4>
                      <a target="__blank" href="https://lediable.netlify.app/">• restaurant website</a>
                  </h4>`;
                  newOutput += `<h4>
                      <a target="__blank" href="https://intrepide.netlify.app/">• gym fitness website</a>
                  </h4>`;
                  newOutput += `<h4>
                      <a target="__blank" href="https://eleganceee.netlify.app/">• interior design company</a>
                  </h4>`;
                  newOutput += `<h4>
                      <a target="__blank" href="https://codeegrid.netlify.app/">• it company</a>
                  </h4>`;
                  newOutput += `<h4>
                      <a target="__blank" href="https://github.com/monciego">• Want to see more?</a>
                  </h4>`;
                  break;
                case 'cd projects':
                  window.location.replace(`${currentURL}#projects`);
                  window.history.replaceState({}, document.title, '/' + '');
                  newOutput += `<h3>Redirected to project section</h3>`;
                  break;
                case 'about':
                  newOutput += `<h3>My name is Jericho P. Bantiquete, A bachelorߴs degree holder with web
                    development experience and passion for responsive website design and a
                    firm believer in the mobile-first approach. I am a passionate
                    front-end developer based in Philippines.
                    <br/>   I absolutely love crafting and bringing to life responsive websites
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
                    <br/>I have eagerness to learn something new every day and I love to share
                    my knowledge to my fellow students and developers. And I am looking
                    forward to talk with you!
                    </h3>`;
                  break;
                case 'cd about':
                  window.location.replace(`${currentURL}#about`);
                  window.history.replaceState({}, document.title, '/' + '');
                  newOutput += `<h3>Redirected to about section</h3>`;
                  break;
                case 'testimonials':
                  newOutput += `<h3>Testimonials</h3>`;
                  break;
                case 'cd testimonials':
                  window.location.replace(`${currentURL}#testimonials`);
                  window.history.replaceState({}, document.title, '/' + '');
                  newOutput += `<h3>Redirected to testimonial section</h3>`;
                  break;
                case 'socials':
                  newOutput += `<h4>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" fill="#b9c4df"></path>
                    </svg>
                    <a target="__blank" href="https://github.com/monciego">https://github.com/monciego</a>
                </h4>`;
                  newOutput += `<h4>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.956 10.356V13.807H16.748C16.302 16 14.435 17.26 11.956 17.26C9.06851 17.2202 6.74862 14.8682 6.74862 11.9805C6.74862 9.09275 9.06851 6.74072 11.956 6.70098C13.1562 6.69954 14.3194 7.11605 15.246 7.87898L17.846 5.27898C14.8636 2.65705 10.508 2.31981 7.15752 4.45142C3.80707 6.58303 2.26698 10.6712 3.37821 14.4836C4.48943 18.296 7.98491 20.9164 11.956 20.914C16.423 20.914 20.485 17.665 20.485 11.98C20.4781 11.4326 20.411 10.8877 20.285 10.355L11.956 10.356Z" fill="#b9c4df"></path>
                    </svg>
                    <a target="__blank" href="mailto:jerichobantiquete@gmail.com">jerichobantiquete@gmail.com</a>
                </h4>`;
                  newOutput += `<h4>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z" fill="#b9c4df"></path>
                    </svg>
                    <a target="__blank" href="https://www.linkedin.com/in/jericho-bantiquete-450541179/">https://www.linkedin.com/in/jericho-bantiquete</a>
                </h4>`;
                  break;
                default:
                  newOutput += `<h5>${commandInput}: command not found</h5>`;
              }

              if (commandInput.trim().length !== 0) {
                if (e.key === 'Enter') {
                  setCommandInput('');
                  if (commandInput.toLowerCase().trim() === 'clear') {
                    setViewCommands(false);
                    SetAllCommand([]);
                    setCommandOutput('');
                  } else if (commandInput.toLowerCase().trim() === 'help') {
                    SetAllCommand(commands);
                    setViewCommands(true);
                  } else if (commandInput.toLowerCase().trim() === 'hide') {
                    setViewCommands(false);
                  } else {
                    setCommandOutput(newOutput);
                  }
                }
              }
            }}
          />
        </div>
      </TerminalContent>
    </StyledTerminal>
  );
};
