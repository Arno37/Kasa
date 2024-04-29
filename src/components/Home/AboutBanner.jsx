import React  from "react";
import AboutBanner from '../Banner/about-banner.png'

export default function AboutBanner () {
    return (
        <div className="= about-banner">
            <img src={AboutBanner} alt="Banner Picture" />
            <div className="overlay"></div>
        </div>
        )
}