import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLogo from '../Header/LOGO.png';

function Header() {
  return (
    <header className='header'>
      <img src={HeaderLogo} alt='kasa-logo' />
      <nav className='header-nav'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
