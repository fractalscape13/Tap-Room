import * as c from './../actions/ActionTypes';

let initialState = {
  selectedKeg: null
};

export default (state = initialState, action) => {
  const { id } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      return Object.assign({}, state, {
        selectedKeg: id
      });
    default:
      return state;
  }
};