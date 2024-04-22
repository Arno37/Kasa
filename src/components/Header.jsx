import { NavLink } from "react-router-dom";
import Logo from '../pictures/LOGO-header.png';

function Header () {
    return (
        <header className="navbar">
            <NavLink to="/" ><img src={Logo} alt="Logo Header" className="navbar__img"/></NavLink>
            <nav className="navbar__links">
                <NavLink to="/" className={({isActive}) => isActive ? "navbar__links--active" : "navbar__links--inactive"}>Accueil</NavLink>
                <NavLink to="/About"  className={({isActive}) => isActive ? "navbar__links--active" : "navbar__links--inactive"}>A propos</NavLink>
            </nav>
        </header>
    )
};

export default Header