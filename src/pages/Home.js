import { Component } from "react";
import Homebanner from "../components/Home/HomeBanner";
import GridHome from '../components/Home/GridHome';

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