import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  let quantity = '';
  if (props.quantity > 1) {
    quantity = props.quantity + ' pints';
  } else if (props.quantity == 1) {
    quantity = ' 1 pint left';
  } else {
    quantity = "Uh-oh, this tap has run dry. Time to restock!";
  }

  return (
    <React.Fragment>
        <p className="clickable" onClick = {() => props.whenKegClicked(props.id)}>On Tap: {props.name} (Click to see details)</p>
        <p>Quantity in keg: {quantity} </p>
        <button onClick={()=> props.onClickingSellPint(props.currentKeg) }>Sell a pint</button> 
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