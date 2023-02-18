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
        padding: 6.32875rem  0 7.6125rem 0;
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
`;
