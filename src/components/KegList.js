import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <div className="overflow">
      {Object.values(props.kegList).map((keg) =>
        <Keg
          whenKegClicked={() => props.onKegSelection(keg.id)}
          currentKeg={keg}
          name={keg.name}
          quantity={keg.quantity}
          id={keg.id} 
          key={keg.id}
          flavor={keg.flavor}
          onClickingSellPint={props.onClickingSellPint}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onClickingSellPint: PropTypes.func
};

export default KegList;