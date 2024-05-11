import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from "../../assets/pictures/LOGO-footer.png";

function Footer() {
  return (
    <div className="footer">

        <NavLink to={`/`}>
          <img src={footerLogo} alt="Logo de Kasa" className="footer__img" />
        </NavLink>

        <div className="footer__text">
            © 2020 Kasa. All rights reserved
        </div>

    </div>
  )
};

export default Footer;