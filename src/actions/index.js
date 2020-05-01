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
  const { name, brand, price, flavor, caffeine, quantity, id } = keg;
  return {
    type: c.EDIT_KEG,
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    caffeine: caffeine,
    quantity: quantity,
    id: id
  }
}

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleEditing = () => ({
  type: c.TOGGLE_EDITING
});

export const selectKeg = (id) => ({
  type: c.SELECT_KEG
});