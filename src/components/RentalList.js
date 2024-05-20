import "../styles/RentalList.scss";
import RentalItem from "./Rental";
import React from "react";
import rentals from "../datas/logements.json";

function RentalList() {
    return (
      //Crée une section HTML avec la clé RentalList et la classe CSS rental-list.
      <section key="RentalList" className="rental-list">
        
        {rentals.map(({ id, title, cover }) => (
          //Pour chaque élément du tableau rentals, rend le composant RentalItem, en passant id, title, et cover comme propriétés. Utilise id comme clé unique pour chaque élément.
          <RentalItem key={id} title={title} cover={cover} id={id} />
        ))}
      </section>
    )

  }
  
  export default RentalList