import * as c from './../actions/ActionTypes';

let initialState = {
  masterKegList: [],
  formVisibleOnPage: false,
  selectedKeg: null,
  editing: false
}

export default (state = initialState, action) => {
  const { name, brand, price, flavor, caffeine, quantity, id } = action;
  switch (action.type) {
    case c.NEW_KEG:
      const newMasterKegList = [...state.masterKegList, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          flavor: flavor,
          caffeine: caffeine,
          quantity: quantity,
          id: id
        }
      }];
      return Object.assign({}, state, {
        masterKegList: newMasterKegList
      });
    case c.EDIT_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          flavor: flavor,
          caffeine: caffeine,
          quantity: quantity,
          id: id
        }
      });
    case c.DELETE_KEG:
      const newState = {...state};
      delete newState[id];
      return newState;
    case c.TOGGLE_FORM:
      return !state.formVisibleOnPage;
    case c.TOGGLE_EDITING:
      return !state.editing;
    case c.SELECT_KEG:
      selectedKeg: id
    default: 
    return state;
  }
};