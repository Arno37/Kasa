import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../styles/Item.scss";

function Rental({ title, cover, id }) {
    return (
      <Link to={`/RentalSheet/${id}`}>
        <div className="rental">
          <p className="rental__title">{title}</p>
          <img className="rental__background" src={cover} alt={title} />
        </div>
      </Link>
    )
  }
  Rental.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };
  
  export default Rental;