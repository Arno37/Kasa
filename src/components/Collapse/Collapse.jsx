import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames";
import vectorup from "../../assets/pictures/Vector-up.png"

const Collapse = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleFilterOpening = () => {
        setIsOpen(!isOpen);
    };
    const collapseClass = classNames("collapse", { "open": isOpen });
    const arrowClass = classNames("arrow", { "down": isOpen });
    const paragraphClass = classNames("paragraph", { "animate": isOpen });

    return (
        <div className={collapseClass}>
            <div className="headCollapse" onClick={handleFilterOpening}>
                <h3>{title}</h3>
                <img 
                src={vectorup} 
                alt="down-arrow"
                className={arrowClass} />
            </div>
            <div className={paragraphClass}>
                {children}
            </div>
        </div>
    );
};

Collapse.propTypes = {
    title : PropTypes.string.isRequired,
    description : PropTypes.node,
};

export default Collapse;


