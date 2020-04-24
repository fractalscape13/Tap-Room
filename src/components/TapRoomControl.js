import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import KegDetail from './KegDetail';

class TapRoomControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleChangingSelectedKeg = (id) => {
    const currentKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: currentKeg});
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
    const newMasterKegList = [...this.state.masterKegList, newKeg];
    this.setState({masterKegList: newMasterKegList, formVisibleOnPage: false});
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({masterKegList: newMasterKegList, selectedKeg: null});
  }

  handleEditingKeg = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
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
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== kegToUpdate.id).concat(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm editing={this.state.editing} keg={this.state.selectedKeg} onEditKeg={this.handleEditingKeg} />
      buttonText="Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} onClickingDelete={this.handleDeletingKeg} onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}  onClickingSellPint={this.handleSellingPint} />
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

export default TapRoomControl;