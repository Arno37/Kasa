import { Link } from "react-router-dom";
import KasaLogo from './LOGO-header.png';

export default function Header() {
    return (
        <header className="navlink">
            <img src={KasaLogo} alt ='' className="KasaLogo" />
        <nav>
            <Link to={`/`}>Accueil</Link>
            <Link to={`/about`}>A propos</Link>
        </nav>
        </header>
    )
}