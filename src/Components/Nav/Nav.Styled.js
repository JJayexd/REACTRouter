import styled from 'styled-components';

export const NavSCSS = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        li{
            display: block;
        }
            a {
            text-decoration: none;
            } &:active {
                color: white;
                border: 0px 0px 4px 0px black;
            }
    }
`
