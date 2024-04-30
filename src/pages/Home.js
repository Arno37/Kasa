import React from 'react'
import Homebanner from "../components/HomeBanner";
import GridHome from '../components/GridHome';

class Home extends Component {
    render(){
        return(
            <div className="Home">
                <Homebanner />
                <GridHome />
            </div>
        )
    }
}

export default Home