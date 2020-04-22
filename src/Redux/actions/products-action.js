import { apiActionCall } from './../actions/api-action';
import { createAsyncAction } from './../../components/Helpers/redux';

export const CHANGE_SEARCH_TEXT = 'CHANGE-SEARCH-TEXT';
export const SEARCH_PRODUCTS = 'SEARCH-PRODUCTS';
export const SET_PRODUCTS = createAsyncAction('SET-PRODUCTS');

export const changeSearchText = (text) => ({
  type: CHANGE_SEARCH_TEXT,
  text: text.target.value,
});

export const searchProducts = () => ({
  type: SEARCH_PRODUCTS,
});

export const onSetProducts = () => {
  return apiActionCall({ types: SET_PRODUCTS, endpoint: '/get-products' });
};
