import React from "react";
import '../../Style/Banner.css'

function Banner ({picture, text}) {
    return (
        <section className="banner">
            <div className="banner-text">
                <img src={picture} alt="bannière" />
            </div>
            <div className="banner-text">
                <h1>
                    {text}
                </h1>
            </div>
        </section>
    )
}

export default Banner