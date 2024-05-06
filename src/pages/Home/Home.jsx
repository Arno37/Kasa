import React from 'react';
import Banner from '../../components/Banner/Banner';
import cardBanner from '../../pictures/home - banner.png';
import Cards from '../../components/Cards/Cards';

function Home() {
  return (
    <main>
      <Banner picture={cardBanner} text='Chez vous, partout et ailleurs' />
      <Cards />
    </main>
  );
}
export default Home;