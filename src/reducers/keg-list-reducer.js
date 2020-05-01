import * as c from '../actions/ActionTypes';


export default (state = {}, action) => {
  const { name, brand, price, flavor, caffeine, quantity, id } = action;
  switch (action.type) {
    case c.NEW_KEG:
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
    case c.SELECT_KEG:
      return state;
    default: 
    return state;
  }
};