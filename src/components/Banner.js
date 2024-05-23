//Importe React et le hook useState depuis la bibliothèque React
import React, { useState } from "react";
//Importe la bibliothèque PropTypes pour vérifier les types des propriétés
import PropTypes from "prop-types";
//Importe les styles CSS pour le composant depuis le fichier Gallery.scss
import "../styles/Gallery.scss";



// Déclaration du composant fonctionnel Banner
const Banner = ({ pictures, slogan, banner }) => {
  
    const [currentItem, setCurrentItem] = useState(0)
  
   // Fonction pour passer à l'image suivante
    const next = () => {
      setCurrentItem((currentItem + 1) % pictures.length)
      
    }
  
    // Fonction pour revenir à l'image précédente
    const prev = () => {
      setCurrentItem((currentItem - 1 + pictures.length) % pictures.length)
      
    }
  
   // Si la galerie contient une seule image, affiche seulement cette image
    if (pictures.length === 1) {
      return (
        <div className={`gallery ${banner ? "banner" : ""}`}>
          <div className="gallery__container">
            
            <img
              src={pictures[0]}
              alt="Slide 1"
              className="gallery__image active"
            />
            {slogan && <h1 className="gallery__title">{slogan}</h1>}
          </div>
        </div>
      )
    }
  
  
    return (
      // Si la galerie contient plusieurs images, cela affiche la liste des images avec des boutons de navigation
      <div className={`gallery ${banner ? "banner" : ""}`}>
        <div className="gallery__container">
          {pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`Slide ${index + 1}`}
              className={
                index === currentItem ? "gallery__image active" : "gallery__image"
              }
            />
          ))}
        </div>
        <div className="gallery__pagination">
          {currentItem + 1} / {pictures.length}
        </div>
        <button className="gallery__prev" onClick={prev}>
          Précédent
        </button>
        <button className="gallery__next" onClick={next}>
          Suivant
        </button>
        {slogan && <h1 className="gallery__title">{slogan}</h1>}
      </div>
    )
  }
  // Définit les types des propriétés attendues pour le composant Banner
  Banner.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    slogan: PropTypes.string,
    banner: PropTypes.bool
  };
  
// Exporte le composant Banner pour pouvoir l'utiliser dans d'autres parties de l'application
export default Banner;
 