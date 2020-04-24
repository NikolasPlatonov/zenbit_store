import { ADD_TO_CART, DELETE_FROM_CART } from './../actions/cart-action';

const initialState = {
  cart: [],
  cartCounter: 0,
  totalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = state.cart.find((p) => p.id === action.data.id);

      return existingProduct
        ? {
            ...state,
            cart: [
              ...state.cart.filter((p) => p.id !== action.data.id),
              { ...existingProduct, units: existingProduct.units + 1 },
            ],
            cartCounter: state.cartCounter + 1,
            totalPrice: state.totalPrice + action.data.price,
          }
        : {
            ...state,
            cart: [...state.cart, { ...action.data, units: 1 }],
            cartCounter: state.cartCounter + 1,
            totalPrice: state.totalPrice + action.data.price,
          };

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.id)],
        cartCounter: state.cartCounter - action.units,
        totalPrice: state.totalPrice - action.price * action.units,
      };

    default:
      return state;
  }
};
