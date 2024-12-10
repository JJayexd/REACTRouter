import styled from 'styled-components';

export const NavSCSS = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        li{
            display: block;
            padding: 1rem;
        }
            a {
            color: black;
            text-decoration: none;
            margin: 1rem;
            transition: 0.1s ease-in;
                &:active{
                    
                }
            }

            a:hover {
                border-bottom: solid 1px black;
            }
    }
`
