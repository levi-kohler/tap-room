import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <p>${props.price} per pint</p>
        <p><i>{props.alcoholContent}%</i></p>
        <p>Pints left in keg: {props.pintsLeft}</p>
      </div>
      <button onClick = {() => props.whenPourClicked(props.id)}>Pour a pint</button>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;