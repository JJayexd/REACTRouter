import styled from 'styled-components';

export const ContainerSCSS = styled.div`
    margin: auto;
    width: ${props => props.width ? props.width : 1024}px;
    background-color: ${props => props.bgcolor ? props.bgcolor : 'transparent'};
`