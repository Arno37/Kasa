import React from "react";
import '../../Style/Banner.css'

function Banner (props) {
    return (
            <div className="banner">
                <img src={props.picture} className ="backgroundBanner" alt="banner" />
            {props.title ? <p className="title">{props.name}</p> : null}
            </div>
            )
}
    


export default Banner