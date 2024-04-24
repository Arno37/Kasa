import { Link, NavLink } from "react-router-dom";
import Logo from '../Header/LOGO-header.png';

const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'A Propos de', href: '/' },
];

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={Logo} alt="Kasa" />
            </Link>
            <nav className="header__nav">
                {navLinks.map((item) => (
                    <NavLink 
                        to={item.href}
                        key={item.name}
                        className={({ isActive }) => {
                            return isActive ? 'active-link' : ''
                        }}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}

export default Header;
