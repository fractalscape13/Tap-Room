import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: parseInt(event.target.price.value), flavor: event.target.flavor.value, caffeine: parseInt(event.target.caffeine.value), quantity: parseInt(event.target.quantity.value), id: keg.id});
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        editing={props.editing}
        keg={keg}
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>

  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func, 
  keg: PropTypes.object,
  editing: PropTypes.bool
};

export default EditKegForm;