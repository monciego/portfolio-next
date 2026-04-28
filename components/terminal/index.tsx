'use client';

import { projects, testimonials } from '@/lib/velite';
import { ABOUT_PARAGRAPHS } from '@/lib/portfolio-data';
import { escapeHtml, sortProjects, sortTestimonials } from '@/lib/utils';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  TerminalInput,
  TextContainer,
  VioletText,
  YellowTerminalButton,
  YellowText,
} from './terminal.styles';

// ---------------------------------------------------------------------------
// Static data — computed once at module load, never rebuilt on re-render
// ---------------------------------------------------------------------------

const COMMANDS = [
  {
    id: 1,
    title: 'projects',
    description: 'Discover and explore my creations.',
  },
  {
    id: 2,
    title: 'about',
    description: 'Discover and learn more about who I am.',
  },
  {
    id: 3,
    title: 'testimonials',
    description: 'Read what other people think about me.',
  },
  {
    id: 4,
    title: 'socials',
    description: "Displays my social networks. Let's connect!",
  },
  { id: 5, title: 'clear', description: 'Cleans the terminal.' },
  {
    id: 6,
    title: 'cd [section]',
    description: 'Scroll to a section. e.g. cd about',
  },
];

const SECTION_IDS: Record<string, string> = {
  'cd projects': 'projects',
  'cd about': 'about',
  'cd testimonials': 'testimonials',
  'cd experience': 'experience',
};

// Pre-compute output HTML for data-driven commands so handleKeyDown never
// has to sort or iterate — it just reads a plain string.

const PROJECTS_OUTPUT = (() => {
  const sorted = sortProjects(projects);
  let html = '';
  for (const project of sorted) {
    const url =
      !project.isLiveLinkDisabled && project.liveLink
        ? project.liveLink
        : !project.isSourceCodeLinkDisabled && project.sourceCodeLink
          ? project.sourceCodeLink
          : null;

    html += url
      ? `<h4><a target="_blank" rel="noopener noreferrer" href="${url}">• ${project.subTitle}</a></h4>`
      : `<h4>• ${project.subTitle}</h4>`;
  }
  html += `<h4><a target="_blank" rel="noopener noreferrer" href="https://github.com/monciego">• Want to see more? → github.com/monciego</a></h4>`;
  return html;
})();

const ABOUT_OUTPUT = (() => {
  return ABOUT_PARAGRAPHS.map((p) => `<h3>${p}</h3>`).join('');
})();

const TESTIMONIALS_OUTPUT = (() => {
  const sorted = sortTestimonials(testimonials);
  return sorted
    .map((t) => `<h3>${t.rawBody.trim()}<h4>— ${t.name}, ${t.title}</h4></h3>`)
    .join('');
})();

const SOCIALS_OUTPUT = (() => {
  let html = '';
  html += `<h4>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" fill="#b9c4df"/>
    </svg>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/monciego">https://github.com/monciego</a>
  </h4>`;
  html += `<h4>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.956 10.356V13.807H16.748C16.302 16 14.435 17.26 11.956 17.26C9.06851 17.2202 6.74862 14.8682 6.74862 11.9805C6.74862 9.09275 9.06851 6.74072 11.956 6.70098C13.1562 6.69954 14.3194 7.11605 15.246 7.87898L17.846 5.27898C14.8636 2.65705 10.508 2.31981 7.15752 4.45142C3.80707 6.58303 2.26698 10.6712 3.37821 14.4836C4.48943 18.296 7.98491 20.9164 11.956 20.914C16.423 20.914 20.485 17.665 20.485 11.98C20.4781 11.4326 20.411 10.8877 20.285 10.355L11.956 10.356Z" fill="#b9c4df"/>
    </svg>
    <a target="_blank" rel="noopener noreferrer" href="mailto:jerichobantiquete@gmail.com">jerichobantiquete@gmail.com</a>
  </h4>`;
  html += `<h4>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z" fill="#b9c4df"/>
    </svg>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jericho-bantiquete-450541179/">https://www.linkedin.com/in/jericho-bantiquete</a>
  </h4>`;
  return html;
})();

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const Terminal: React.FunctionComponent = () => {
  const [commandInput, setCommandInput] = useState('');
  const [showCommands, setShowCommands] = useState(false);
  const [commandOutput, setCommandOutput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true });
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Enter' || commandInput.trim().length === 0) return;

      const trimmed = commandInput.toLowerCase().trim();
      const rawInput = commandInput;

      setCommandInput('');

      // --- Commands that don't produce terminal output ---

      if (trimmed === 'clear') {
        setShowCommands(false);
        setCommandOutput('');
        return;
      }

      if (trimmed === 'help') {
        setShowCommands(true);
        return;
      }

      if (trimmed === 'hide') {
        setShowCommands(false);
        return;
      }

      // --- cd navigation commands ---

      if (SECTION_IDS[trimmed]) {
        const sectionId = SECTION_IDS[trimmed];
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: 'smooth' });
        setCommandOutput(
          (prev) =>
            `${prev}<h2><span>> </span>${escapeHtml(rawInput)}</h2><h3>Redirected to ${sectionId} section.</h3>`
        );
        return;
      }

      // --- Data-driven commands ---

      let content = '';

      switch (trimmed) {
        case 'projects':
          content = PROJECTS_OUTPUT;
          break;

        case 'about':
          content = ABOUT_OUTPUT;
          break;

        case 'testimonials':
          content = TESTIMONIALS_OUTPUT;
          break;

        case 'socials':
          content = SOCIALS_OUTPUT;
          break;

        default:
          content = `<h5>${escapeHtml(trimmed)}: command not found</h5>`;
      }

      setCommandOutput(
        (prev) =>
          `${prev}<h2><span>> </span>${escapeHtml(rawInput)}</h2>${content}`
      );
    },
    [commandInput]
  );

  return (
    <StyledTerminal
      onClick={() => inputRef.current?.focus()}
      className="container"
    >
      <TerminalHeader>
        <TerminalButtons>
          <RedTerminalButton />
          <YellowTerminalButton />
          <GreenTerminalButton />
        </TerminalButtons>
        <TerminalHeaderTitle>
          <TerminalHeaderLink
            target="_blank"
            rel="noopener noreferrer"
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
            {showCommands
              ? `> Type "hide" to hide all commands.`
              : `> Type "help" for all available commands.`}
          </GreenText>
        </TextContainer>

        {showCommands &&
          COMMANDS.map((command) => (
            <Command key={command.id}>
              <CommandTitle>{command.title}</CommandTitle>
              <CommandDescription>{command.description}</CommandDescription>
            </Command>
          ))}

        <div
          className="terminal-output"
          dangerouslySetInnerHTML={{ __html: commandOutput }}
        />

        <div>
          <GreenText>{'>'}</GreenText>{' '}
          <TerminalInput
            ref={inputRef}
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </TerminalContent>
    </StyledTerminal>
  );
};
