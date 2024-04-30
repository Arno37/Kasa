import React from 'react'
import HomeBanner from '../pictures/home - banner.png'

export default function Home_Banner() {
    return (
        <div className="HomeBanner">
            <img src={HomeBanner} alt="BannerPicture" />
            <div className="overlay">
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    )
}
