import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  let name = null;
  let brand = null;
  let price = 0;
  let flavor = null;
  let caffeine = 0;
  let quantity = 0;
  
  if (props.editing) {
    name = props.keg.name;
    brand = props.keg.brand;
    if (props.keg.price > 0) {
      price = props.keg.price;
    }
    flavor = props.keg.flavor;
    if (props.keg.caffeine > 0) {
      caffeine = props.keg.caffeine;
    }
    if (props.keg.quantity > 0) {
      quantity = props.keg.quantity;
    }
  } 

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          defaultValue={name} /><br />
        <input
          type='text'
          name='brand'
          placeholder='Brand'
          defaultValue={brand} /><br />
        <input
          type='number'
          name='price'
          placeholder='Price per pint'
          defaultValue={price} /><br />
        <input
          type='text'
          name='flavor'
          placeholder='Flavor'
          defaultValue={flavor} /><br />
        <input
          type='number'
          name='caffeine'
          placeholder='Caffeine content per serving in mg'
          defaultValue={caffeine} /><br />
        <input
          type='number'
          name='quantity'
          min='0'
          placeholder='Quantity in pints'
          defaultValue={quantity} /><br />
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