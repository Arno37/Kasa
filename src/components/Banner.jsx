import React from "react";

function Banner ({ image, title }) {
  return (
    <div className="Banner">
      <img src={image} className="Banner__img" alt="Bannière" />
      <div className="Banner__overlay"></div>
      <h1 className="banner__title">{title}</h1>
    </div>
  );
}

export default Banner;
