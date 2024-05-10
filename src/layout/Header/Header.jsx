import React from "react";
import { NavLink } from "react-router-dom";
import kasaLogo from "../../assets/pictures/LOGO.png"

function Header() {
    return (
        <header>
            <NavLink to={`/`}>
                <img src={kasaLogo} alt="kasalogo" />
            </NavLink>
            <nav className="navbar__links">
                <NavLink to={`/`} className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                    Accueil
                </NavLink>
                <NavLink to={`/about`} className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                    À propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;