import { Component } from 'react';
import homeBanner from '../Banner/home - banner.png'

class Homebanner extends Component {
  render(){
      return(
    <div className='home-Banner'>
      <img src={homeBanner} alt="background-picture" />
      <div className='title'>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}
}

export default Homebanner;
