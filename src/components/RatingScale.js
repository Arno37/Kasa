import PropTypes from "prop-types";
import React from "react";

function Tags ({text}) {
    return <p className="tags">{text}</p>;
}

Tags.propTypes={
    text : PropTypes.string.isRequired,
}

export default Tags;