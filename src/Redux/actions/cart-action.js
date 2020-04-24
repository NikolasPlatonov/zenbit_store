export const ADD_TO_CART = 'ADD-TO-CART';
export const DELETE_FROM_CART = 'DELETE-FROM-CART';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  data: product,
});

export const deleteFromCart = (productId, productUnits, productPrice) => ({
  type: DELETE_FROM_CART,
  id: productId,
  units: productUnits,
  price: productPrice,
});
