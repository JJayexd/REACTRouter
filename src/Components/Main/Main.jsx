import { MainSCSS } from './Main.Styled';

export const Main = ({ children }) => {
    return (
        <MainSCSS>
            {children}
        </MainSCSS>
    )
}