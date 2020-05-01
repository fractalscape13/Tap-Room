import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  let quantity = '';
  let style = {};
  let imgSource = "http://source.unsplash.com/250x150/?" + props.flavor;
  if (props.quantity > 9) {
    quantity = 'Quantity in Keg: ' + props.quantity + ' pints';
    style = stocked;
  } else if (props.quantity > 1 && props.quantity < 10) {
    quantity = 'Almost Empty! Only ' + props.quantity + ' pints left';
    style = gettingLow;
  } else if (props.quantity === 1) {
    quantity = 'Seriously Almost Empty! Only 1 pint left!';
    style = gettingVeryLow;
  } else {
    quantity = "Uh-oh, this tap has run dry. Time to restock!";
    style = outOfStock;
  }

  return (
    <div className="card">
        <p className="clickable" onClick = {() => props.whenKegClicked(props.id)}>On Tap: {props.name} (Click to see details)</p>
        <img className="clickable" onClick = {() => props.whenKegClicked(props.id)} src={imgSource} alt="booch flavor" /><br />
        <p style={style}>{quantity} </p>
        <button className="sellBtn" onClick={()=> props.onClickingSellPint(props.currentKeg) }>Sell a pint</button> 
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  quantity: PropTypes.number,
  flavor: PropTypes.string,
  currentKeg: PropTypes.object,
  whenKegClicked: PropTypes.func,
  onClickingSellPint: PropTypes.func
};

const stocked = {
  color: 'darkgreen'
}

const gettingLow = {
  color: 'mediumblue'
}

const gettingVeryLow = {
  color: 'darkmagenta'
}

const outOfStock = {
  color: 'firebrick'
}

export default Keg;