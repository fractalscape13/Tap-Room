import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  let name = null;
  let brand = null;
  let price = null;
  let flavor = null;
  let caffeine = null;
  let quantity = null;
  
  if (props.editing) {
    name = 'Name: ' + props.keg.name;
    brand = 'Brand: ' + props.keg.brand;
    price = 'Price per pint: $' + props.keg.price;
    flavor = 'Flavor: ' + props.keg.flavor;
    caffeine = 'Caffeine content: ' + props.keg.caffeine + ' mg';
    quantity = 'Quantity: ' + props.keg.quantity + ' pints';
  } else {
    name = 'Name';
    brand = 'Brand';
    price = 'Price per pint';
    flavor = 'Flavor';
    caffeine = 'Caffeine content per serving in mg';
    quantity = 'Quantity in pints';
  }

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder={name} /><br />
        <input
          type='text'
          name='brand'
          placeholder={brand} /><br />
        <input
          type='number'
          name='price'
          placeholder={price} /><br />
        <input
          type='text'
          name='flavor'
          placeholder={flavor} /><br />
        <input
          type='number'
          name='caffeine'
          placeholder={caffeine} /><br />
        <input
          type='number'
          name='quantity'
          placeholder={quantity} /><br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  keg: PropTypes.object, 
  editing: PropTypes.bool
};

export default ReusableForm;