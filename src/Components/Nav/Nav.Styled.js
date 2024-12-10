import styled from 'styled-components';

export const NavSCSS = styled.nav`
    display: block;

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        li{
            display: block;
            margin: 1rem;
        }
    }

    &.active {
        border: 0px 0px 2px 0px black;
    }
`
