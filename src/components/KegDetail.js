import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  
  let quantity = '';
  if (props.keg.quantity > 1) {
    quantity = props.keg.quantity + ' pints';
  } else if (props.keg.quantity == 1) {
    quantity = '1 pint left';
  } else {
    quantity = " This tap has run dry";
  }
  
  return (
    <React.Fragment>
      <h3>Keg Details</h3>
      <hr />
      <p>Name: {props.keg.name}</p>
      <p>Brand: {props.keg.brand}</p>
      <p>Price: ${props.keg.price} per pint</p>
      <p>Flavor: {props.keg.flavor}</p>
      <p>Caffeine content: {props.keg.caffeine} mg</p>
      <p>Quantity: {quantity}</p>
      <button onClick={()=> props.onClickingEdit(props.keg) }>Update this keg</button>
      <button onClick={()=> props.onClickingDelete(props.keg.id) }>Delete this keg</button><br />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;