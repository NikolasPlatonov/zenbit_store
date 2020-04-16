import { ADD_TO_CART } from './../actions/cart-action';

const initialState = {
  cart: [],
  cartCounter: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.data, units: 1 }],
        cartCounter: state.cartCounter + 1,
      };
    default:
      return state;
  }
};
