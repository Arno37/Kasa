import React from 'react';
import { Link } from 'react-router-dom';
import list from '../../apartments-list.json';
import '../../Style/Cards.css'



function Cards() {
  return (
    <section className='cards'>
      {list.map(apartment => (
        <Link key={apartment.id} to={`/logement/${apartment.id}`}>
          <article className="card-content">
            <img className="card-picture" src={apartment.cover} alt={apartment.title} />
            <div className='card-bottom'>
              <h2 className='card-title'>{apartment.title}</h2>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}
export default Cards