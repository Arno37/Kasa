import React from "react";
import bannerAbout from '../pictures/about-banner.png';
import Banner from '../components/Banner/Banner';
import Apartments from "../pages/Apartments";
import Collapse from '../components/Collapse';

function About() {
    return (
<main>
    <Banner image={bannerAbout}/>

    {Apartments.map((collapse , criteria) => (
        <Collapse key={criteria} title= {collapse.title} description={collapse.description}/>
    ))}
</main>

    )
}

export default About
