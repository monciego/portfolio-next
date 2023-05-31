import { createGlobalStyle } from 'styled-components';
import { MyProps } from './theme';

export const GlobalStyles = createGlobalStyle<MyProps>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.poppins};
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        color: ${({ theme }) => theme.colors.white}
    }

    .container {
        max-width: 90%;
        width: 100%;
        margin: 0 auto;
    }

    li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        font-family: inherit;
    }
    
    section,
    footer{
        padding: 6.32875rem  0 2.6125rem 0;
    }

    section {
        width: 90%;
        margin: 0 auto;
        overflow-x: hidden;
    }

    footer {
        padding: 4.32875rem 5% 7.6125rem 5%;
    }

    
    @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 6.32875rem 0 7.6125rem 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    button {
        font-size: clamp(var(--min), var(--val), var(--max));
    }

    p {
        --min: 1em;
        --val: 2.5vw;
        --max: 1.5em;
    }

    input {
        border: none;
        outline: none;
        background: none;
        padding: .5rem 0;
        font-size: clamp(var(--min), var(--val), var(--max));
        text-shadow: 0px 0px 0px #000;
        --min: 0.85em;
        --val: 2.5vw;
        --max: 1em;
        font-family: ${({ theme }) => theme.fonts.firaCode};
    }

    /* terminal text */
    .terminal-output h2,
    .terminal-output h3,
    .terminal-output h4,
    .terminal-output h5,
    .terminal-output a {
          font-size: clamp(var(--min), var(--val), var(--max));
        --min: 0.85em;
        --val: 2.5vw;
        --max: 1em;
        font-weight: 400;
    }

    /* input text */
    .terminal-output h2 {
        color: #35a35b;
        font-weight: 600;
        margin-bottom: 0.25rem;
    }

    /* output text */
    .terminal-output h3,
    .terminal-output h4,
    .terminal-output h5 {
        padding-left: 2rem;
        margin-bottom: 0.85rem;
    }

    /* socials */
    .terminal-output h4 {
        display: flex;
        align-items: center;
    }

    /* terminal error */
    .terminal-output h5 {
        color: #F78F85;
    }

    /* terminal link */
    .terminal-output a {
        padding-left: .5rem;
    }

    /* terminal arrow */
    .terminal-output span {
        color: #5ad786;
        font-weight: 400;
    }
`;
