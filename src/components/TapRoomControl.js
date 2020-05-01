import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions/index';

class TapRoomControl extends React.Component {

  handleEditClick = () => {
    const action = a.toggleEditingTrue();
    this.props.dispatch(action);
  }

  handleChangingSelectedKeg = (id) => {
    const currentKeg = this.props.masterKegList[id];
    const action = a.selectKeg(currentKeg.id);
    this.props.dispatch(action);
  }

  handleClick = () => {
    if (this.props.selectedKeg.selectedKeg != null) {
      const action = a.toggleFormFalse();
      this.props.dispatch(action);
      const action2 = a.toggleEditingFalse();
      this.props.dispatch(action2);
      const action3 = a.selectKeg(null);
      this.props.dispatch(action3);
    } else {
      const action4 = a.toggleFormTrue();
      this.props.dispatch(action4);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const action = a.newKeg(newKeg);
    this.props.dispatch(action);
    const action2 = a.toggleFormFalse();
    this.props.dispatch(action2);
  }

  handleDeletingKeg = (id) => {
    const action = a.deleteKeg(id);
    this.props.dispatch(action);
    const action2 = a.selectKeg(null);
    this.props.dispatch(action2);
  }

  handleEditingKeg = (kegToEdit) => {
    const action = a.editKeg(kegToEdit);
    this.props.dispatch(action);
    const action2 = a.toggleEditingFalse();
    this.props.dispatch(action2);
    const action3 = a.selectKeg(null);
    this.props.dispatch(action3);
  }

  handleSellingPint = (kegToUpdate) => {
    if (kegToUpdate.quantity > 0) {
      const newKeg = {
        name: kegToUpdate.name,
        brand: kegToUpdate.brand,
        price: kegToUpdate.price,
        flavor: kegToUpdate.flavor,
        caffeine: kegToUpdate.caffeine,
        quantity: kegToUpdate.quantity - 1,
        id: kegToUpdate.id
      }
      const action = a.editKeg(newKeg);
      this.props.dispatch(action);
    }
  }

  
  render(){
    const currentKeg = this.props.masterKegList[this.props.selectedKeg.selectedKeg];
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.toggleConditions.editing) {
      currentlyVisibleState = <EditKegForm editing={this.props.toggleConditions.editing} keg={this.props.masterKegList[this.props.selectedKeg.selectedKeg]} onEditKeg={this.handleEditingKeg} />
      buttonText="Return to Keg List";
    } else if (this.props.selectedKeg.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={currentKeg} onClickingDelete={this.handleDeletingKeg} onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Keg List";
    } else if (this.props.toggleConditions.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg}  onClickingSellPint={this.handleSellingPint} />
      buttonText = "Add a keg";
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

TapRoomControl.propTypes = {
  toggleConditions: PropTypes.object,
  masterKegList: PropTypes.object,
  selectedKeg: PropTypes.object
};

const mapStateToProps = state => {
  return {
    toggleConditions: state.toggleConditions,
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg
  }
}

TapRoomControl = connect(mapStateToProps)(TapRoomControl);

export default TapRoomControl;