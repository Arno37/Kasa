import React from "react";
import fullStar from "../assets/pictures/star.png";
import emptyStar from "../assets/pictures/star-inactive.png";
import PropTypes from "prop-types";
import "../styles/Scale.scss";

function Rating({ scaleValue }) {
    const range = [1, 2, 3, 4, 5]
    //Déclare un tableau range contenant les valeurs de 1 à 5, représentant les étoiles.
  
    return (
      //Parcourt le tableau range et applique une fonction à chaque élément rangeElem.
      <div className="rating">
    
        {range.map((rangeElem) =>
          scaleValue >= rangeElem ? (
             
            //Si la condition est vraie, affiche une image d'étoile pleine (fullStar) avec un texte alternatif et une classe CSS rating__star.
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