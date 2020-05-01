import * as c from './../actions/ActionTypes';

let initialState = {
  formVisibleOnPage: false,
  editing: false,
};

export default (state = initialState, action) => {
  const { editing, formVisibleOnPage } = action;
  switch (action.type) {
    case c.TOGGLE_FORM:
      return Object.assign({}, state, {
        formVisibleOnPage: !formVisibleOnPage
      });
    case c.TOGGLE_EDITING:
      return Object.assign({}, state, {
        editing: !editing
      });
    default:
      return state;
  }
};