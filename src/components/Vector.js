import React from "react";
import collapseHandle from "../assets/pictures/Vector-down.png"
import "../styles/Collapse.scss";
import { useState } from "react";
import PropTypes from "prop-types";

function Vector({ collapseLabel, content }) {
  const [classNameSuffixValue, modifyClassNameSuffixValue] = useState("")
  const [isOpen, modifyOpen] = useState(false)
  const display = (
    <div className={`collapse__hidden-box${classNameSuffixValue}`}>
      {content}
    </div>
  )


  function collapseRotate() {
    if (classNameSuffixValue === "") {
      modifyOpen(true)
      setTimeout(() => {
        modifyClassNameSuffixValue("--open")
      }, 601)
    } else {
      modifyClassNameSuffixValue("")
      setTimeout(() => {
        modifyOpen(false)
      }, 601)
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
  content: PropTypes.node.isRequired 
};

export default Vector;