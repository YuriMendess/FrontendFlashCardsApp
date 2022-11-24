import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #202020;
        font-family: "Segoe UI", sans-serif;
        color: #FFF;
    }

    a {
        color: green;
        text-decoration: none;

        &:hover {
            color: #FFF;
        }
    }
`
;