import reducer from '../../reducers/select-keg-reducer';
import * as c from '../../actions/ActionTypes';

describe('reducer', () => {

  let action;

  test('should return default state if no type specified', () => {
    expect(reducer({}, {type:null})).toEqual({});
  });

  test('should succesfully set current state to the id of selected keg', () => {
    action = {
      type: c.SELECT_KEG,
      id: 1
    };
    expect(reducer({}, action)).toEqual({
      selectedKeg: 1
    });
  });
})