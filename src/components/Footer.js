import React from "react";
import "../styles/Footer.scss";
import logoKasaWhite from "../assets/pictures/LOGO-footer.png";


function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo"
            src={logoKasaWhite}
            alt="logo de kasa en Blanc" />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer