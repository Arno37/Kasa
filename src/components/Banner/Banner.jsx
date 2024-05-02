import React from "react";

function Banner ({image, texte}) {
    return (
        <section className="banner">
            <div className="banner-text">
                <img src={image} alt="bannière" />
            </div>
            <div className="banner-text">
                <h1>
                    {texte}
                </h1>
            </div>
        </section>
    )
}

export default Banner