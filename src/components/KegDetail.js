import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete, onPouringPint } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <p>${keg.price} per pint</p>
      <p><i>{keg.alcoholContent}%</i></p>
      <p>Pints left in keg: 124</p> <button onClick={() => onPouringPint(keg.pintsLeft) }>Pour a pint</button>
      <button onClick={() => onClickingDelete(keg.id) }>Remove Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;