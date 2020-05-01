import * as c from './../actions/ActionTypes';

let initialState = {
  formVisibleOnPage: false,
  editing: false,
};

export default (state = initialState, action) => {
  const { editing, formVisibleOnPage } = action;
  switch (action.type) {
    case c.TOGGLE_FORM_TRUE:
      return Object.assign({}, state, {
        formVisibleOnPage: true
      });
    case c.TOGGLE_FORM_FALSE:
      return Object.assign({}, state, {
        formVisibleOnPage: false
      });
    case c.TOGGLE_EDITING_TRUE:
      return Object.assign({}, state, {
        editing: true
      });
    case c.TOGGLE_EDITING_FALSE:
      return Object.assign({}, state, {
        editing: false
      });
    default:
      return state;
  }
};