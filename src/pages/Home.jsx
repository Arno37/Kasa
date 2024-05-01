import React from 'react';
import apartmentsList from '../apartments-list.json';
import Cards from '../components/Cards';
function Home() {
  return (
    <div>
      <main>
        <section className='banner'>
          <div className='background'></div>
          <h1>Chez vous, partout et ailleurs</h1>
        </section>

        <section className='card'>
          {apartmentsList &&
            apartmentsList.map((location) => {
              return <Cards key={location.id} location={location} />;
            })}
        </section>
      </main>
    </div>
  );
}

export default Home;
