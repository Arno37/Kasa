import React from 'react'
import imgBanner from '../pictures/home - banner.png'

function HomeBanner() {
    return (
        <div className="HomeBanner">
            <img src={imgBanner} alt="BannerPicture" />
            <div className="overlay">
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    )
}

export default HomeBanner