import { NavSCSS } from './Nav.Styled';
import { NavLink } from 'react-router-dom';
export const Nav = () => {
    return (
        <NavSCSS>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/posters">Posters</NavLink></li>
            </ul>
        </NavSCSS>
    )
}