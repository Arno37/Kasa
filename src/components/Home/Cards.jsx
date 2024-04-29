import React from 'react';
import { Link } from 'react-router-dom'

export default function Cards(props) {
    return (
        <Link to={`/Appartments/${props.id}`} className='cards-appartments'>
            <h2>{props.title}</h2>
            <img src={props.image}/>
        </Link>
    )
}
