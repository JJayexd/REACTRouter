import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0rem;
        margin: 0rem;
        background-color: ${props => props.theme.colors.secondary};
    }
`