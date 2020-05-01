import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, flavor, caffeine, quantity, id } = keg;
  return {
    type: c.NEW_KEG,
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    caffeine: caffeine,
    quantity: quantity,
    id: id
  }
}

export const editKeg = (keg) => {

}

export const deleteKeg = (id) => {
  
}