import { ContainerSCSS } from './Container.Styled'
export const Container = ({ children, width, bgcolor }) => {
    return (
        <ContainerSCSS width={width} $bgcolor={bgcolor}>
            {children}
        </ContainerSCSS>
    )
}