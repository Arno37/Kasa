import React from "react";
import image from "../../assets/pictures/home-banner.png";
import BannerGallery from "../../components/Banner.js";
import RentalList from "../../components/RentalList";

function Accueil(){
  return(
    <main>
    <BannerGallery pictures={[image]} slogan="Chez vous, partout et ailleurs" banner={true} />
    <RentalList />
    </main>
)
}
export default Accueil;