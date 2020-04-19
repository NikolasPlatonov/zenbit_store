export const CHANGE_SEARCH_TEXT = 'CHANGE-SEARCH-TEXT';
export const SEARCH_PRODUCTS = 'SEARCH-PRODUCTS';

export const changeSearchText = (text) => ({
  type: CHANGE_SEARCH_TEXT,
  text: text.target.value,
});

export const searchProducts = () => ({
  type: SEARCH_PRODUCTS,
});
