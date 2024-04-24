import { NavLink } from "react-router-dom";
import Logo from '../pictures/LOGO-header.png';


function Header() {
    return (
        <header className="navbar">
            <NavLink to="/"><img src={Logo} alt="Logo Header" className="navbar__img"/></NavLink>
            <nav className="navbar__links">
                <NavLink exact to="/" activeClassName="navbar__links--active">Accueil</NavLink>
                <NavLink to="/About" activeClassName="navbar__links--active">A propos</NavLink>
            </nav>
        </header>
    );
}
