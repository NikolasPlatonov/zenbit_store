import { CHANGE_SEARCH_TEXT } from '../actions/products-action';

const initialState = {
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
    default:
      return state;
  }
};

export default searchReducer;
