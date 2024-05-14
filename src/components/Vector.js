import React from "react";
import dropdownHandle from "../assets/pictures/Vector-down.png"
import "../styles/Dropdown.scss";
import { useState } from "react";
import PropTypes from "prop-types";

function Vector({ dropdownLabel, content }) {
  const [classNameSuffixValue, modifyClassNameSuffixValue] = useState("")
  const [isOpen, modifyOpen] = useState(false)
  const display = (
    <div className={`dropdown__hidden-box${classNameSuffixValue}`}>
      {content}
    </div>
  )

  /**
   * Function to control rotation of the handle
   * and to toggle the open/closed state of the dropdown.
   */

  function dropdownRotate() {
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
    <div className="dropdown">
      <div className={`dropdown__background${classNameSuffixValue}`}>
        <div className="dropdown__title">
          <p className="dropdown__title__label">{dropdownLabel}</p>
          <img
            src={dropdownHandle}
            onClick={dropdownRotate}
            alt="dropdown-handle"
            className={`dropdown__title__handle${classNameSuffixValue}`}
          />
        </div>
        {isOpen && display}
      </div>
    </div>
  )
}
Vector.propTypes = {
  dropdownLabel: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired 
};

export default Vector;