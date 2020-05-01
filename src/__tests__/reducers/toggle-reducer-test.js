import reducer from '../../reducers/toggle-reducer';
import * as c from '../../actions/ActionTypes';

describe('reducer', () => {

  let initialState = {
    formVisibleOnPage: false,
    editing: false,
    selectedKeg: null
  };

  test('should return default state if no type specified', () => {
    expect(reducer(initialState, {type: null})).toEqual({
      formVisibleOnPage: false,
      editing: false,
      selectedKeg: null
    });
  });

  test('should return true form visible state when toggle_form_true is called', () => {
    expect(reducer(initialState, {type: c.TOGGLE_FORM_TRUE})).toEqual({
      formVisibleOnPage: true,
      editing: false,
      selectedKeg: null
    });
  });

  test('should return true editing state when toggle_editing_true is called', () => {
    expect(reducer(initialState, {type: c.TOGGLE_EDITING_TRUE})).toEqual({
      formVisibleOnPage: false,
      editing: true,
      selectedKeg: null
    });
  });
});