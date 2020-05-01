import * as c from './ActionTypes';

export const newKeg = (keg) => {
  console.log("!!!!!", keg);
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

export const toggleFormTrue = () => ({
  type: c.TOGGLE_FORM_TRUE
});

export const toggleFormFalse = () => ({
  type: c.TOGGLE_FORM_FALSE
});

export const toggleEditingTrue = () => ({
  type: c.TOGGLE_EDITING_TRUE
});

export const toggleEditingFalse = () => ({
  type: c.TOGGLE_EDITING_FALSE
});

export const selectKeg = (id) => ({
  type: c.SELECT_KEG,
  id
});