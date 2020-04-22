import {
  CHANGE_SEARCH_TEXT,
  SEARCH_PRODUCTS,
  SET_PRODUCTS,
} from '../actions/products-action';

const initialState = {
  searchText: '',
  searchProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.data,
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
