import React from "react";
import fullStar from "../assets/pictures/star.png";
import emptyStar from "../assets/pictures/star-inactive.png";
import PropTypes from "prop-types";
import "../styles/Scale.scss";

function Rating({ scaleValue }) {
    const range = [1, 2, 3, 4, 5]
  
    return (
      <div className="rating">
        {/* Map over the range array to generate stars */}
        {range.map((rangeElem) =>
          scaleValue >= rangeElem ? (
             // Display a full star if scaleValue is greater than or equal to the current range element
            <img
              src={fullStar}
              alt={scaleValue}
              key={rangeElem.toString()}
              className="rating__star"
            />
          ) : (
            // Otherwise, display an empty star
            <img
              src={emptyStar}
              alt={scaleValue}
              key={rangeElem.toString()}
              className="rating__star"
            />
          )
        )}
      </div>
    )
  }
  Rating.propTypes = {
    scaleValue: PropTypes.string.isRequired,
  };
  
  export default Rating;