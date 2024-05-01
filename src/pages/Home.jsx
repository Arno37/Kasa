import React from 'react'
import HomeBanner from '../components/HomeBanner'
import GridHome from '../components/GridHome'


function Home () {
    return(
        <div className="Home">
            <HomeBanner />
            <GridHome />
        </div>
    )
}
  
export default Home