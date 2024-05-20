import React from "react";
import rentals from "../datas/logements.json";
import PropTypes from 'prop-types';
import "../styles/Renter.scss";

function Identity({ sheet }) {
    return (
      <div className="identity">
        
        <p className="identity__name">{rentals[sheet].host.name}</p>
        <img
          src={rentals[sheet].host.picture}
          alt={rentals[sheet].host.name}
          className="identity__picture"
        />
      </div>
    )
  }
  //Définit les types des propriétés attendues pour le composant Identity, spécifiant que sheet est un nombre requis.
  Identity.propTypes = {
    sheet: PropTypes.number.isRequired,
  };
  
  
  export default Identity;
