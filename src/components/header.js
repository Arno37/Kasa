import React from "react";
import "../styles/Header.scss";
//Importe le composant Link depuis la bibliothèque react-router-dom pour la navigation interne
import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="header">
        <nav className="navbar">
          
          <Link className="navbar__logo" to="/">
            <h1 className="navbar__logo__title">
              <span className="navbar__logo__title__svg"></span>
            </h1>
          </Link>
          <Link className="navbar__link" to="/">
            Accueil
          </Link>
          <Link className="navbar__link" to="/a-propos">
            A Propos
          </Link>
        </nav>
      </header>
    )
  }
  
  export default Header