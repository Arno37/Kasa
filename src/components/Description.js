import React from "react"
import rentals from "../datas/logements.json"
import PropTypes from 'prop-types'
import "../styles/HousingDescription.scss"

function Description({ sheet }) {
    return (
      <div className="housing-description">
        <h2 className="housing-description__title">{rentals[sheet].title}</h2>
        <p className="housing-description__location">{rentals[sheet].location}</p>
      </div>
    )
  }
Description.propTypes = {
    sheet: PropTypes.number.isRequired,
  };
  
  export default Description;