import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';


import HomeBackground from "../components/Banner/home - background.png"

function Home() {
    return (
    <div>
    <Banner picture={HomeBackground} title="Chez vous, partout et ailleurs" className="banner" />
</div>
);
}

export default Home;