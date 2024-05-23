import React from "react";
import collapseHandle from "../assets/pictures/collapse-down.png"
import "../styles/Collapse.scss";
import { useState } from "react";
import PropTypes from "prop-types";


function Collapse({ collapseLabel, content }) {

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
    if (classNameSuffixValue === "") {
      modifyOpen(true)
      setTimeout(() => {
        modifyClassNameSuffixValue("--open")
      }, 500)
    } else {
      modifyClassNameSuffixValue("")
      setTimeout(() => {
        modifyOpen(false)
      }, 500)
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


Collapse.propTypes = {
  collapseLabel: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired 
};

export default Collapse;