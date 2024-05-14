import React from "react"
import rentals from "../datas/logements.json"
import PropTypes from 'prop-types'
import "../styles/HousingSummary.scss"

function Summary({ sheet }) {
    return (
      <div className="housing-summary">
        <h2 className="housing-summary__title">{rentals[sheet].title}</h2>
        <p className="housing-summary__location">{rentals[sheet].location}</p>
      </div>
    )
  }
  Summary.propTypes = {
    sheet: PropTypes.number.isRequired,
  };
  
  export default Summary;