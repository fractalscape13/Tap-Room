import reducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('reducer', () => {

  let action;

  const newKeg = {
    name: 'Electric Koolaid',
    brand: 'Humboocha',
    price: 5,
    flavor: 'Papaya',
    caffeine: 25,
    quantity: 140,
    id: 1
  };

  const currentState = {
    1: {
      name: 'Electric Koolaid',
      brand: 'Humboocha',
      price: 5,
      flavor: 'Papaya',
      caffeine: 25,
      quantity: 140,
      id: 1
    },
    2: {
      name: 'Nectar',
      brand: 'GoldenBooch',
      price: 4,
      flavor: 'Jackfruit',
      caffeine: 15,
      quantity: 250,
      id: 2
    }
  };

  test('should return default state if no type specified', () => {
    expect(reducer({}, {type: null})).toEqual({});
  });

  test('should return updated masterKegList when new keg is added', () => {
    const { name, brand, price, flavor, caffeine, quantity, id } = newKeg;
    action = {
      type: c.NEW_KEG,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      caffeine: caffeine,
      quantity: quantity, 
      id: id
    };
    expect(reducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        caffeine: caffeine,
        quantity: quantity, 
        id: id
      }
    });
  });

  test('should successfully delete a ticket by id', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(reducer(currentState, action)).toEqual({
      2: {
        name: 'Nectar',
        brand: 'GoldenBooch',
        price: 4,
        flavor: 'Jackfruit',
        caffeine: 15,
        quantity: 250,
        id: 2
      }
    });
  });
});