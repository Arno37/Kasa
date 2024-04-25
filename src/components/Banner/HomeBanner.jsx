import React from 'react';
import HomeBanner from '../Banner/home - banner.png'

export default function Homebanner() {
  return (
    <div className='home-banner'>
      <img src={HomeBanner} alt="Banner Picture" />
      <div className='overlay'>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}