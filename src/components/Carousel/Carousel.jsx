import React from "react";
import PropTypes from "prop-types"
import vectorleft from "../../assets/pictures/Vector-left.png"
import vectorright from "../../assets/pictures/Vector-right.png"
import { useState, useEffect } from "react";

const Carousel = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoScrollInterval, setAutoScrollInterval] = useState(null);
    const autoSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
    useEffect(() => {
        const intervalId = setInterval(autoSlide, 3000);
        setAutoScrollInterval(intervalId);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
    };
    const previousClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
        stopAutoScroll();
    };
    const nextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        stopAutoScroll();
    };
    const currentSlide = slides[currentIndex];
    const numSlides = slides.length;
    const displayArrows = numSlides > 1;
    const displayIndicator = numSlides > 1;

    return (
        <div className="apartment__carousel">
            <img className="apartment__carousel--slider" src={currentSlide} alt={`Slide ${currentIndex + 1}`} />
            {displayArrows && (
                <>
                    <img className="apartment__carousel__vectorleft" src={vectorleft} alt="Flèche de gauche" onClick={previousClick} />
                    <img className="apartment__carousel__vectorright" src={vectorright} alt="Flèche de droite" onClick={nextClick} />
                </>
            )}
            {displayIndicator && (
                <div className="logement__carousel__slide-indicator">{`${currentIndex + 1}/${slides.length}`}</div>
            )}
        </div>
    );
} 
Carousel.propType = {
    slides : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;