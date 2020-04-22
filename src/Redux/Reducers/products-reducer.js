import { SET_PRODUCTS } from '../actions/products-action';

const initialState = {
  products: [],
  err: null,
  isLoader: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS.REQUEST:
      return {
        ...state,
        isLoader: true,
      };

    case SET_PRODUCTS.SUCCESS:
      return {
        ...state,
        products: action.resp,
        isLoader: false,
      };

    default:
      return state;
  }
};

export default productsReducer;
