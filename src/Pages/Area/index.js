import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import rentals from '../../datas/logements.json';
import '../../styles/RentalSheet.scss';
import Vector from '../../components/Vector.js';
import Rating from '../../components/Rating.js';
import Identity from '../../components/Identity.js';
import Tag from '../../components/Tag.js';
import Gallery from '../../components/Banner.js';
import Description from '../../components/Description.js';

function Area() {
  const { id } = useParams();
  const navigate = useNavigate();
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
          <Vector
            collapseLabel="Description"
            content={<p className="collapse__content">{rentals[sheet].description}</p>}
          />
          <Vector
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

export default Area;