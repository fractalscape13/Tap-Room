import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      {Object.values(props.kegList).map((keg) =>
        <Keg
          whenKegClicked={() => props.onKegSelection(keg.id)}
          currentKeg={keg}
          name={keg.name}
          quantity={keg.quantity}
          id={keg.id} 
          key={keg.id}
          onClickingSellPint={props.onClickingSellPint}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onClickingSellPint: PropTypes.func
};

export default KegList;