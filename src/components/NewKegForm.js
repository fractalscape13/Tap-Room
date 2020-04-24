import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: parseInt(event.target.price.value), flavor: event.target.flavor.value, caffeine: parseInt(event.target.caffeine.value), quantity: parseInt(event.target.quantity.value), id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add this keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;