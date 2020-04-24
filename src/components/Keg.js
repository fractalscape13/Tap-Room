import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  let quantity = '';
  if (props.quantity > 1) {
    quantity = 'Quantity in Keg: ' + props.quantity + ' pints';
  } else if (props.quantity == 1) {
    quantity = 'Quantity in Keg: 1 pint left';
  } else {
    quantity = "Uh-oh, this tap has run dry. Time to restock!";
  }

  return (
    <React.Fragment>
        <p className="clickable" onClick = {() => props.whenKegClicked(props.id)}>On Tap: {props.name} (Click to see details)</p>
        <p>{quantity} </p>
        <button className="sellBtn" onClick={()=> props.onClickingSellPint(props.currentKeg) }>Sell a pint</button> 
        <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  quantity: PropTypes.number,
  currentKeg: PropTypes.object,
  whenKegClicked: PropTypes.func,
  onClickingSellPint: PropTypes.func
};

export default Keg;