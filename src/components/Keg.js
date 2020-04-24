import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  let quantity = '';
  let style = '';
  if (props.quantity > 9) {
    quantity = 'Quantity in Keg: ' + props.quantity + ' pints';
    style = stocked;
  } else if (props.quantity > 1 && props.quantity < 10) {
    quantity = 'Almost Empty! Only ' + props.quantity + ' pints left';
    style = gettingLow;
  } else if (props.quantity == 1) {
    quantity = 'Seriously Almost Empty! Only 1 pint left!';
    style = gettingVeryLow;
  } else {
    quantity = "Uh-oh, this tap has run dry. Time to restock!";
    style = outOfStock;
  }

  return (
    <React.Fragment>
        <p className="clickable" onClick = {() => props.whenKegClicked(props.id)}>On Tap: {props.name} (Click to see details)</p>
        <p style={style}>{quantity} </p>
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

const stocked = {
  color: 'darkgreen'
}

const gettingLow = {
  color: 'goldenrod'
}

const gettingVeryLow = {
  color: 'magenta'
}

const outOfStock = {
  color: 'red'
}

export default Keg;