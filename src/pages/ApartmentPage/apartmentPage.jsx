import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel.jsx';
import Tag from "../../components/Tags/tag.jsx";
import Rating from '../../components/Rating/rating.jsx';
import Collapse from '../../components/Collapse/collapse.jsx';
import { logementGetById } from '../../services/API.js';

function apartmentPage() {
  const location = useLocation();
  const [selectedById, setSelectedById] = useState(null);

  useEffect(() => {
    logementGetById(location.state.logementById)
      .then(setSelectedById)
      .catch(console.error);
  }, [location.state.logementById]);
  if (selectedById == null) return <div>Loading...</div>;

  return (
    <div className='logement'>
      <Carousel slides={selectedById.pictures} />
      <div className='logement__description__top'>
        <div className='logement__description__top--info'>
          <h1> {selectedById.title} </h1>
          <h2> {selectedById.location} </h2>
          <div className='logement__description__top--block-tags'>
            {selectedById.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>

        <div className='logement__description__top--host-block'>
          <div className='logement__description__top--host-block--host'>
            <h3> {selectedById.host.name} </h3>
            <img src={selectedById.host.picture} alt={selectedById.title} />
          </div>
          <div className='rating'>
            <Rating rating={parseInt(selectedById.rating, 10)} />
          </div>
        </div>
      </div>

      <div className='logement__description--bottom'>
        <Collapse title='Description'>{selectedById.description}</Collapse>
        <Collapse title='Equipement'>
          <ul>
            {selectedById.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
export default apartmentPage;
