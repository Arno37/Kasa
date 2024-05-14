import React from "react";
import rentals from "../datas/logements.json";
import PropTypes from 'prop-types'
import "../styles/Tag.scss";

function Tag({ sheet }) {
    return (
      <ul className="tag-list">
        {rentals[sheet].tags.map((tag, id) => (
          <li key={id} className="tag-list__item">
            {tag}
          </li>
        ))}
      </ul>
    )
  }
  Tag.propTypes = {
    sheet: PropTypes.number.isRequired,
  };
  
  export default Tag;