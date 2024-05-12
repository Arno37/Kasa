import { useEffect, useState } from "react";
import { apartmentsList } from "../../services/API";
import ApartmentCard from "../ApartmentCard/apartmentcard.jsx";

function apartmentGallery() {
    const [logements, setLogements] = useState([])

    useEffect(() => {
        apartmentsList()
        .then(setLogements)
        .catch(console.error);
    }
    , []);


    return (
        <div className="logement-gallery">
          {logements.map((logement, logementCard) => (
            <ApartmentCard title={logement.title} key={logementCard} imageUrl={logement.cover} id={logement.id} />
          ))}
        </div>
      );
    };
    
    export default apartmentGallery;