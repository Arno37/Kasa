import React from 'react';
import '../../Style/Header.scss';
import { NavLink } from 'react-router-dom';
import HeaderLogo from '../Header/LOGO.png';


function Header() {
  return (
    <header className='header'>
      <NavLink to='/Kasa/'>
      <img src={HeaderLogo} alt='kasa-logo' className='header-nav' />
      </NavLink>
          <nav className="navbar">
            <NavLink className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')} to="/Kasa/">
          Accueil
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')} to="/Kasa/A-propos">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
