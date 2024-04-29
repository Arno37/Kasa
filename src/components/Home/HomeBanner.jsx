import { Component } from 'react';
import homeBanner from '../Banner/home - banner.png'

export default function HomeBanner() {
  return (
    <div className='home-Banner'>
      <img src={homeBanner} alt="background-picture" />
      <div className='title'>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}