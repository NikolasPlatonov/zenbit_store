import {
  CHANGE_SEARCH_TEXT,
  SEARCH_PRODUCTS,
  SET_PRODUCTS,
} from '../actions/products-action';

const initialState = {
  products: [],
  searchText: '',
  searchProducts: [],
  err: null,
  isLoader: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS.REQUEST:
      console.log('productsReducer -> action', action);
      return {
        ...state,
        isLoader: true,
      };

    case CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.text,
      };

    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: state.products.filter((product) =>
          product.name.toLowerCase().includes(state.searchText.toLowerCase())
        ),
      };

    default:
      return state;
  }
};

export default productsReducer;
