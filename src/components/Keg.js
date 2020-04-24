import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <hr />
        <p>Name: {props.name}</p>
        <p>Brand: {props.brand}</p>
        <p>Price: ${props.price} per pint</p>
        <p>Flavor: {props.flavor}</p>
        <p>Caffeine content: {props.caffeine} mg</p>
        <p>Quantity: {props.quantity} pints</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  caffeine: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;