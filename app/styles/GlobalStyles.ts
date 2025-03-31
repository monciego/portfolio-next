import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        overflow-x: hidden;
        scroll-behavior: smooth;
        font-family: ${({ theme }) => theme.fonts.inter};
    }

    body {
        background-color: ${({ theme }) => theme.colors.backgroundColor}; 
        color: ${({ theme }) => theme.colors.white};
    }

    .container {
        max-width: 90%;
        width: 100%;
        margin: 0 auto;


        @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            width: 85%;
        }
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
    footer {
        padding: 6.32875rem 0 2.6125rem 0;
    }

    section {
        margin: 0 auto;
        overflow-x: hidden;
    }

    footer {
        padding: 4.32875rem 5% 7.6125rem 5%;

        @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 4.32875rem 7.5% 7.6125rem 7.5%;
        }
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

    /* Terminal Styles */
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

    .terminal-output h2 {
        color: #35a35b;
        font-weight: 600;
        margin-bottom: 0.25rem;
    }


    .terminal-output br {
        display: block;
    }

    .terminal-output h3,
    .terminal-output h4,
    .terminal-output h5 {
        padding-left: 2rem;
        margin-bottom: 0.85rem;
    }

    .terminal-output h4 {
        display: flex;
        align-items: center;
    }

    .terminal-output h5 {
        color: #F78F85;
    }

    .terminal-output a {
        padding-left: .5rem;
    }

    .terminal-output span {
        color: #5ad786;
        font-weight: 400;
    }
    
    .change-text::before {
        content: 'create';
        animation: change infinite 5s;
    }

    @keyframes change {
        0% {
            content: 'create';
        }
        50% {
            content: 'destroy';
        }
        100% {
            content: 'create';
        }
    }

    /* Glitch Effect */
    .responsive {
        display: inline-block;
        animation: stretch 5s cubic-bezier(0.4, 1.4, 0.75, 0.9) infinite;
        transform-origin: center;
    }

    .responsive:nth-of-type(1) { animation-delay: 3s; }
    .responsive:nth-of-type(2) { animation-delay: 0.8s; }
    .responsive:nth-of-type(3) { animation-delay: 4.8s; }
    .responsive:nth-of-type(4) { animation-delay: 2s; }
    .responsive:nth-of-type(5) { animation-delay: 1.2s; }
    .responsive:nth-of-type(6) { animation-delay: 3.6s; }
    .responsive:nth-of-type(7) { animation-delay: 2.4s; }
    .responsive:nth-of-type(8) { animation-delay: 3.2s; }
    p span:nth-of-type(9) { animation-delay: 4s; }
    p span:nth-of-type(10) { animation-delay: 1.6s; }

    @keyframes stretch {
        5% {
            transform: scaleX(10);
            opacity: 0.1;
        }

        15% {
            transform: scaleX(1);
            opacity: 1;
        }
    }
`;
