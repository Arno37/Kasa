import { Link } from "react-router-dom";
import HeaderLogo from '../pictures/LOGO.png';

export default function Header() {
    return (
        <header className="bloc">
<img src={HeaderLogo} alt="" className="logo" />
<nav>
    <Link to={`/`}>Accueil</Link>
    <Link to={`/About`}>A propos</Link>
</nav>
        </header>
    )
}
