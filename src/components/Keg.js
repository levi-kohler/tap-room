import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>

    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired
};

export default Keg;