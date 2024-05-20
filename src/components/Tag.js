import React from "react";
import rentals from "../datas/logements.json";
import PropTypes from 'prop-types'
import "../styles/Tag.scss";

//Déclare le composant fonctionnel Tag qui accepte une propriété sheet.
function Tag({ sheet }) {
    return (
      <ul className="tag">
        
        {rentals[sheet].tags.map((tag, id) => (
          
          //Parcourt le tableau tags de l'objet rentals à l'index sheet et déstructure chaque élément en tag et id.
          <li key={id} className="tag__item">
            {tag}
          </li>
        ))}
      </ul>
    )
  }
  //Définit les types des propriétés attendues pour le composant Tag, spécifiant que sheet est un nombre requis.
  Tag.propTypes = {
    sheet: PropTypes.number.isRequired,
  };
  
  export default Tag;