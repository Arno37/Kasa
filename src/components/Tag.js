import React from "react";
import rentals from "../datas/logements.json";
import PropTypes from 'prop-types'
import "../styles/Tag.scss";

function TagList({ sheet }) {
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
  TagList.propTypes = {
    sheet: PropTypes.number.isRequired,
  };
  
  export default TagList