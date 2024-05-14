import React from "react";
import image from "../../assets/pictures/home-banner.png";
import Banner from "../../components/Banner.js";
import RentalList from "../../components/RentalList.js";

function Welcome(){
  return(
    <main>
    <Banner pictures={[image]} slogan="Chez vous, partout et ailleurs" banner={true} />
    <RentalList />
    </main>
)
}
export default Welcome;