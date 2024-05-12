import React from "react";
import PropTypes from "prop-types";
import starActive from "../../assets/pictures/star.png";
import starInactive from "../../assets/pictures/star-inactive.png";

const Rating = ({rating})  => {
    const fullRating = 5;
    let starInactive = [];
    for (let index = 0; index < rating; index++) {
        starActive.push(<img className="starActive" key={`active-${index}`} src={starActive} alt="Star Active" />);
    }
    for (let index = 0; index < (fullRating - rating); index++) {
        starInactive.push(<img className="starInactive" key={`inactive-${index}`} src={starInactive} alt="Star Inactive" />);
    }
    return (
        <>
            {starActive}
            {starInactive}
        </>
    );
};
Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;