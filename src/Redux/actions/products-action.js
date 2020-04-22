import { apiActionCall } from './../actions/api-action';
import { createAsyncAction } from './../../components/Helpers/redux';

export const SET_PRODUCTS = createAsyncAction('SET-PRODUCTS');

export const onSetProducts = () => {
  return apiActionCall({ types: SET_PRODUCTS, endpoint: '/get-products' });
};
