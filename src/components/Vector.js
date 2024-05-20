import React from "react";
import collapseHandle from "../assets/pictures/Vector-down.png"
import "../styles/Collapse.scss";
import { useState } from "react";
import PropTypes from "prop-types";

//Déclare le composant fonctionnel Vector qui accepte les propriétés collapseLabel et content.
function Vector({ collapseLabel, content }) {

  //Utilise le hook useState pour gérer l'état classNameSuffixValue, initialisé à une chaîne vide
  const [classNameSuffixValue, modifyClassNameSuffixValue] = useState("")
  
  //Utilise le hook useState pour gérer l'état isOpen, initialisé à false.
  const [isOpen, modifyOpen] = useState(false)

  //Déclare un élément JSX qui contient content et qui est conditionnellement affiché avec une classe dynamique basée sur classNameSuffixValue.
  const display = (
    <div className={`collapse__hidden-box${classNameSuffixValue}`}>
      {content}
    </div>
  )

//Déclare la fonction collapseRotate qui gère l'ouverture et la fermeture du collapse.
function collapseRotate() {

  //Vérifie si la valeur de classNameSuffixValue est une chaîne vide
  if (classNameSuffixValue === "") {

    //Si classNameSuffixValue est une chaîne vide, cette ligne met à jour l'état isOpen en le définissant sur true, ce qui signifie que le collapse est ouvert.
    modifyOpen(true);

    //Si classNameSuffixValue n'est pas une chaîne vide, cette ligne supprime la classe --open de classNameSuffixValue. Cela signifie que le collapse est fermé.
    modifyClassNameSuffixValue("--open");
  } else {
    modifyClassNameSuffixValue("");
    modifyOpen(false);
  }
}

  return (
    <div className="collapse">
      <div className={`collapse__background${classNameSuffixValue}`}>
        <div className="collapse__title">
          <p className="collapse__title__label">{collapseLabel}</p>
          <img
            src={collapseHandle}
            onClick={collapseRotate}
            alt="collapse-handle"
            className={`collapse__title__handle${classNameSuffixValue}`}
          />
        </div>
        {isOpen && display}
      </div>
    </div>
  )
}
Vector.propTypes = {
  collapseLabel: PropTypes.string.isRequired,
  //Cette ligne définit le type de la propriété content. Elle utilise PropTypes.node pour indiquer qu'elle peut accepter n'importe quel type de nœud React, comme des éléments JSX, des chaînes de caractères, des composants, etc. Le isRequired signifie que cette propriété est également obligatoire.
  content: PropTypes.node.isRequired 
};

export default Vector;