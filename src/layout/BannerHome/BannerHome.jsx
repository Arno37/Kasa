import React from "react"
import homeBanner from "../../assets/pictures/home-banner.png"


function BannerHome() {
    return (
        <div className="banner">
            <img src={homeBanner} alt="homeBanner" className="banner__img" />
            <div className="banner__background"></div>
            <h1>Chez vous, partout et ailleurs</h1>

        </div>
    )
}
export default BannerHome