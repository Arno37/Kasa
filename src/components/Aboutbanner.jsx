import React from "react";
import AboutBanner from '../pictures/about-banner.png'

export default function About_Banner(){
    return(
        <div className="AboutBanner">
             <img src={AboutBanner} alt="BannerImage" />
            <div className="overlay"></div>
        </div>
        
    )
}