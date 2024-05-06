import React, { useState } from "react";
import vectorDown from '../pictures/Vector-down.png';
import vectorUp from '../pictures/Vector-up.png';
import { useLocation } from 'react-router-dom'



function Collapse ({ title, description }) {
    const [open, OpenCollapse] = useState(false);
    const location = useLocation();

    const modifyDisplay = () => {
        OpenCollapse(!open);
    };

    const ApartmentsList = location.pathname.includes('/apartments-list');

    return (
        <div className="collapse">
            <div className={`${ApartmentsList ? 'collapse-apartmentvisible' : 'collapse-visible'}`} >
                <h2 className="collapse-title">{title}</h2>
                <img className="collapse-picture" src={open ? vectorDown : vectorUp} alt="vecteur" onClick={modifyDisplay}/>
        </div>
        {open && (
            <div className={`${ApartmentsList ? 'collapse-apartmentinvisible' : 'collapse-invisible'}`}>
                {Array.isArray(description) ? (
                    <ul>
                        {description.map((reference, equipments) => (
                    <li key={`${reference}-${equipments}`} className="collapse-list">{equipments}</li>
                        ))}
                        </ul>
                ) : (
                    <p className= 'collapse-description'>{description}</p>
                )}
            </div>
        )}
    </div>
    );
}
export default Collapse;