export const CHANGE_SEARCH_TEXT = 'CHANGE-SEARCH-TEXT';
export const SEARCH_PRODUCTS = 'SEARCH-PRODUCTS';
export const SET_PRODUCTS = 'SET-PRODUCTS';

export const changeSearchText = (text) => ({
  type: CHANGE_SEARCH_TEXT,
  text: text.target.value,
});

export const searchProducts = () => ({
  type: SEARCH_PRODUCTS,
});

export const onSetProducts = (data) => ({
  type: SET_PRODUCTS,
  data: data,
});
