import React from "react";
import kasaLogoFooter from '../../src/pictures/LOGO-footer.png'

function Footer () {
  return (
    <footer className='footer'>
      <img className='footer-logo' src={kasaLogoFooter} alt='kasaLogo-footer' />
      <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
      </footer>
  )
}
export default Footer