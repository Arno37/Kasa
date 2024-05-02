import React from 'react';
import Banner from '../../components/Banner/Banner'
import cardBanner from '../../pictures/home - banner.png'

function Home (){
  return (
    <main>
      <Banner
      image={cardBanner}
      texte='Chez vous, partout et ailleurs'
      />
    </main>
  )
}
export default Home