import React from "react"
import rentals from "../datas/logements.json"
//Importe la bibliothèque PropTypes pour vérifier les types des propriétés
import PropTypes from 'prop-types'
import "../styles/HousingDescription.scss"

//Déclare le composant fonctionnel Description qui accepte une propriété sheet.
function Description({ sheet }) {
 
   //Commence le rendu du JSX
    return (
      
      <div className="housing-description">
        <h2 className="housing-description__title">{rentals[sheet].title}</h2>
        <p className="housing-description__location">{rentals[sheet].location}</p>
      </div>
    )
  }
  //Définit les types des propriétés attendues pour le composant Description, spécifiant que sheet est un nombre requis.
Description.propTypes = {
    sheet: PropTypes.number.isRequired,
  };
  
  //Exporte le composant Description pour pouvoir l'utiliser dans d'autres parties de l'application.
  export default Description;