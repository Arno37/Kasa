import React from "react";
import { Link } from "react-router-dom";

function apartmentCard(props){
    return (
        <Link to="/apartment" state={{apartmentById: props.id}}
        className="apartmentCard">
            <img src={props.pictureUrl} alt={props.title} />
            <h3>{props.title}</h3>

        </Link>
    )
}

export default apartmentCard;