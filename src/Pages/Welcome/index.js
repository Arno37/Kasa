import React from "react";
import imagebackgroundcolor from "../../assets/pictures/home-banner.png";
import Banner from "../../components/Banner.js";
import RentalList from "../../components/RentalList.js";

function Welcome(){
  return(
    <main>
    <Banner pictures={[imagebackgroundcolor]} slogan="Chez vous, partout et ailleurs" banner={true} />
    <RentalList />
    </main>
)
}
export default Welcome;