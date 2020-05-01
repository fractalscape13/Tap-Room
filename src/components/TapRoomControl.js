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
    this.setState({editing: true});
  }

  handleChangingSelectedKeg = (id) => {
    const currentKeg = this.props.masterKegList.filter(keg => keg.id === id)[0];
    const action = a.selectKeg(currentKeg.id);
    this.props.dispatch(action);
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = [...this.props.masterKegList, newKeg];
    this.setState({masterKegList: newMasterKegList, formVisibleOnPage: false});
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.props.masterKegList.filter(keg => keg.id !== id);
    this.setState({masterKegList: newMasterKegList, selectedKeg: null});
  }

  handleEditingKeg = (kegToEdit) => {
    const editedMasterKegList = this.props.masterKegList.filter(keg => keg.id !== this.props.selectedKeg).concat(kegToEdit);
    this.setState({masterKegList: editedMasterKegList, editing: false, selectedKeg: null});
  }

  handleSellingPint = (kegToUpdate) => {
    const newKeg = {
      name: kegToUpdate.name,
      brand: kegToUpdate.brand,
      price: kegToUpdate.price,
      flavor: kegToUpdate.flavor,
      caffeine: kegToUpdate.caffeine,
      quantity: kegToUpdate.quantity - 1,
      id: kegToUpdate.id
    }
    const newMasterKegList = this.props.masterKegList.filter(keg => keg.id !== kegToUpdate.id).concat(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    console.log("PROPS!!!!!!", this.props);
    console.log("Props.toggleConditions:::", this.props.toggleConditions);
    console.log("Props.masterKegList::::", this.props.masterKegList);
    console.log("Props.selectedKeg::::", this.props.selectedKeg);

    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.toggleConditions.editing) {
      currentlyVisibleState = <EditKegForm editing={this.props.toggleConditions.editing} keg={this.props.masterKegList[this.props.selectedKeg.selectedKeg]} onEditKeg={this.handleEditingKeg} />
      buttonText="Return to Keg List";
    } else if (this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.props.masterKegList[this.props.selectedKeg.selectedKeg]} onClickingDelete={this.handleDeletingKeg} onClickingEdit={this.handleEditClick} />
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