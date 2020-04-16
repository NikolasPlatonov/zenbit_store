import { ADD_TO_CART } from './../actions/cart-action';

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  console.log('!!!!!!', action);
  switch (action.type) {
    case ADD_TO_CART:
      console.log('ACTION', action);
      return {
        ...state,
        cart: ['Product added'],
      };
    default:
      return state;
  }
};
