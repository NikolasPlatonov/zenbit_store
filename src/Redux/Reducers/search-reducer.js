import { CHANGE_SEARCH_TEXT, SEARCH_PRODUCTS } from '../actions/search-action';

const initialState = {
  products: [],
  searchText: '',
  searchProducts: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default searchReducer;
