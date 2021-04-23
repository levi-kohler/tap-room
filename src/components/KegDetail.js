import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>{keg.name} - {keg.brand}</h3>
      <p>${keg.price}</p>
      <p><i>{keg.alcoholContent}%</i></p>
      <button onClick={() => onClickingDelete(keg.id) }>Close Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;