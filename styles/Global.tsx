import { createGlobalStyle } from 'styled-components';
import { MyProps } from './theme';

export const GlobalStyles = createGlobalStyle<MyProps>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.inter};
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        color: ${({ theme }) => theme.colors.white}
        overflow-x: hidden;
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
`;
