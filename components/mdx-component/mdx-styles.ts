import styled from 'styled-components';

interface PoemProps {
  readonly $italic?: string;
}

export const MDXArticle = styled.article`
  > :first-child {
    margin-top: 0;
  }

  p {
    margin: 1.25rem 0;
    font-size: 1rem;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    scroll-margin-top: 7rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  h1 {
    margin: 2.5rem 0 1.5rem;

    font-size: 2em;
    font-weight: 800;

    line-height: 1.2;
    letter-spacing: -0.025em;
  }

  h2 {
    margin: 3rem 0 1rem;
    padding-bottom: 0.5rem;

    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.025em;
  }

  h3 {
    margin: 2.5rem 0 0.75rem;

    font-size: clamp(1.25rem, 3vw, 1.5rem);
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.025em;
  }

  h4 {
    margin: 2rem 0 0.75rem;

    font-size: clamp(1.125rem, 2vw, 1.25rem);
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.015em;
  }

  h5 {
    margin: 1.75rem 0 0.5rem;

    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.015em;
  }

  h6 {
    margin: 1.75rem 0 0.5rem;

    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.01em;
  }

  a {
    color: ${({ theme }) => theme.colors.accentBlue};
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: rgba(96, 165, 250, 0.4);
    text-decoration-thickness: 1px;
    text-underline-offset: 0.2em;

    transition:
      color 0.2s ease,
      text-decoration-color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accentBlueHover};
    text-decoration-color: ${({ theme }) => theme.colors.accentBlueHover};
  }

  /* lists */

  ul,
  ol {
    margin: 1.25rem 0;
    padding-left: 1rem !important;
    list-style-position: outside;
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  ul {
    list-style-type: disc !important;
  }

  ol {
    list-style-type: decimal !important;
  }

  li {
    display: list-item !important;
    list-style: inherit !important;
    margin: 0.5rem 0;
    list-style-position: outside !important;
    line-height: 1.625;
  }

  /* Nested lists */
  li > ul,
  li > ol {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem !important;
  }

  /* Nested unordered lists */
  li > ul {
    list-style-type: circle !important;
  }

  /* Third level */
  li > ul > li > ul {
    list-style-type: square !important;
  }

  /*checkbox*/

  ul:has(input[type='checkbox']) {
    padding-left: 0 !important;
    list-style-type: none !important;
  }

  ul:has(input[type='checkbox']) li {
    padding-left: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none !important;
  }

  /* blockquote */

  blockquote {
    margin: 1.5rem 0;
    padding-left: 1rem;
    border-left: 4px solid ${({ theme }) => theme.colors.borderSecondary};

    color: ${({ theme }) => theme.colors.textPrimary};

    font-style: italic;
    font-weight: 500;
  }

  /* horizontal rule */

  hr {
    margin: 2rem 0;

    border: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  }

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 800;
  }

  code {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.965em;
  }

  :not(pre) > code {
    padding: 0.15rem 0.4rem;

    border-radius: 0.25rem;

    background: ${({ theme }) => theme.colors.backgroundCode};
    color: ${({ theme }) => theme.colors.textCode};

    font-size: 0.875em;
    font-weight: 500;

    word-break: break-word;
  }

  pre {
    margin: 1.5rem 0;

    overflow-x: auto;

    border: 1px solid ${({ theme }) => theme.colors.borderSecondary};
    border-radius: 0.25rem;

    background: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.textPrimary};

    font-size: 0.875rem;
    line-height: 1.7;

    box-shadow: ${({ theme }) => theme.colors.shadow};
  }

  /* tables */

  table {
    width: 100%;
    margin: 1.5rem 0;

    border-collapse: collapse;

    font-size: 0.95rem;

    display: block;
    overflow-x: auto;
  }

  thead {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }

  tbody tr {
    border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  }

  th,
  td {
    padding: 0.75rem 1rem;

    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};

    text-align: left;
  }

  th {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 700;
  }

  td {
    color: inherit;
  }

  /* mark */

  mark {
    padding: 0 0.25rem;

    border-radius: 0.125rem;

    background: ${({ theme }) => theme.colors.backgroundHighlight};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  /* superscript / subscript*/
  sup,
  sub {
    font-size: 0.75rem;
    line-height: 0;
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  sup {
    position: relative;
    top: -0.5em;
  }

  sub {
    position: relative;
    bottom: -0.25em;
  }

  /* responsive */

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    h1 {
      margin-top: 2rem;
    }

    h2 {
      margin-top: 2.5rem;
    }

    h3 {
      margin-top: 2rem;
    }

    pre {
      padding: 1rem;
      font-size: 0.8125rem;
    }

    table {
      font-size: 0.875rem;
    }

    th,
    td {
      padding: 0.625rem 0.75rem;
    }
  }
`;

export const Poem = styled.div<PoemProps>`
  margin: 2rem 0;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 1.125rem;
  line-height: 1.8;
  font-style: ${(props) => (props.$italic ? 'italic' : 'normal')};
  color: ${({ theme }) => theme.colors.textPrimary};

  p {
    margin-bottom: 1.5rem;
    white-space: pre-line;
  }
`;
