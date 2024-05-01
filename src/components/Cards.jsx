import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ location }) => {
  let cardClass;
  !location.cover ? (cardClass = 'card') : (cardClass = 'card no-background');
  return (
    <Link
      to={`/location/${location.id}`}
      key={location.id}
      className={cardClass}
    >
      {location.cover ? <img src={location.cover} alt='' /> : null}
      <div className='background'></div>
      {<h2 key={location.id}>{location.title}</h2>}
    </Link>
  );
};
export default Card;