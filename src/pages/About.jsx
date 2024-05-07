import React from 'react';
import bannerAbout from '../pictures/about-banner.png';
import Apartments from '../apartments-list.json';
import Collapse from '../components/Collapse';

function About() {
  return (
    <main>
      <img className="bannerAbout" src={bannerAbout} alt={bannerAbout} />

      {Apartments.map((collapse, criteria) => (
        <Collapse
          key={criteria}
          title={collapse.title}
          description={collapse.description}
        />
      ))}
    </main>
  );
}

export default About;
