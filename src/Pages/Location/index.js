
import React, { useEffect, useState } from 'react';
//useNavigate et useParams sont importés depuis react-router-dom pour la navigation et pour récupérer les paramètres de l'URL.
import { useNavigate, useParams } from 'react-router-dom';
import rentals from '../../datas/logements.json';
import '../../styles/RentalSheet.scss';
import Collapse from '../../components/Collapse.js';
import Rating from '../../components/Rating.js';
import Identity from '../../components/Identity.js';
import Tag from '../../components/Tag.js';
import Gallery from '../../components/Banner.js';
import Description from '../../components/Description.js';

function Location() {
  //useParams est utilisé pour récupérer l'ID du logement à partir de l'URL
  const { id } = useParams();
  //useNavigate est utilisé pour naviguer et/ou rediriger l'utilisateur vers une autre page
  const navigate = useNavigate();
  //useState est utilisé pour gérer l'état local du composant
  const [sheet, setSheet] = useState(null);

  useEffect(() => {
   
    function searchRental(id) {
      for (let i = 0; i < rentals.length; i++) {
        if (rentals[i].id === id) {
          return i;
        }
      }
      return -1;
    }

    const sheetIndex = searchRental(id);
   
    if (sheetIndex === -1) {
      navigate('/error');
    } else {
      setSheet(sheetIndex);
    }
  }, [id, navigate]);

  if (sheet === null) {
    return null;
  }

  return (
    <main>
      <Gallery pictures={rentals[sheet].pictures} />

      <section className="rental-sheet">
        <div className="rental-sheet__overview">
          <div className="rental-sheet__overview__housing">
            <Description sheet={sheet} />
            <Tag sheet={sheet} />
          </div>

          <div className="rental-sheet__overview__host">
            <Identity sheet={sheet} />
            <Rating scaleValue={rentals[sheet].rating} />
          </div>
        </div>

        <div className="rental-sheet__detail">
          <Collapse
            collapseLabel="Description"
            content={<p className="collapse__content">{rentals[sheet].description}</p>}
          />
          <Collapse
            collapseLabel="Équipements"
            content={
              <div className="collapse__hidden-box__item">
                <ul>
                  {rentals[sheet].equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </div>
            }
          />
        </div>
      </section>
    </main>
  );
}

export default Location;