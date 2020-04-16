export const ADD_TO_CART = 'ADD-TO-CART';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  data: product,
});
