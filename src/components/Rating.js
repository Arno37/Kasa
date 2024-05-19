import React from "react";
import fullStar from "../assets/pictures/star.png";
import emptyStar from "../assets/pictures/star-inactive.png";
import PropTypes from "prop-types";
import "../styles/Scale.scss";

function Rating({ scaleValue }) {
    const range = [1, 2, 3, 4, 5]
  
    return (
      <div className="rating">
        
        {range.map((rangeElem) =>
          scaleValue >= rangeElem ? (
             
            <img
              src={fullStar}
              alt={scaleValue}
              key={rangeElem.toString()}
              className="rating__star"
            />
          ) : (
            
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