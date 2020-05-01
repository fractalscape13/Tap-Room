// import reducer from '../../reducers/keg-list-reducer';
// import * as c from '../../actions/ActionTypes';

// describe('reducer', () => {
//   let action;

//   const newKeg = {
//     name: 'Electric Koolaid',
//     brand: 'Humboocha',
//     price: 5,
//     flavor: 'Papaya',
//     caffeine: 25,
//     quantity: 140,
//     id: 1
//   };

//   test('should return default state if no type specified', () => {
//     expect(reducer({}, {type: null})).toEqual({
//       masterKegList: [],
//       selectedKeg: null,
//     });
//   });

//   test('should return updated masterKegList when new keg is added', () => {
//     const { name, brand, price, flavor, caffeine, quantity, id } = newKeg;
//     action = {
//       type: c.ADD_KEG,
//       name: name,
//       brand: brand,
//       price: price,
//       flavor: flavor,
//       caffeine: caffeine,
//       quantity: quantity, 
//       id: id
//     };
//     expect(reducer({}, action)).toEqual({
//       [id] : {
//         name: name,
//         brand: brand,
//         price: price,
//         flavor: flavor,
//         caffeine: caffeine,
//         quantity: quantity, 
//         id: id
//       }
//     });
//   });
// });