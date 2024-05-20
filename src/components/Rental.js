import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../styles/Item.scss";

//Déclare le composant fonctionnel Rental qui accepte les propriétés title, cover, et id.
function Rental({ title, cover, id }) {
    return (
      //Crée un lien avec react-router-dom qui redirige vers l'URL /RentalSheet/{id}.
      <Link to={`/RentalSheet/${id}`}>
        <div className="rental">
          <p className="rental__title">{title}</p>
          <img className="rental__background" src={cover} alt={title} />
        </div>
      </Link>
    )
  }

  //Définit les types des propriétés attendues pour le composant Rental, spécifiant que title, cover, et id sont des chaînes de caractères requises.
  Rental.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };
  
  export default Rental;