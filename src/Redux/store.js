import { createStore, combineReducers, applyMiddleware } from 'redux';
import productsReducer from './reducers/products-reducer';
import { cartReducer } from './reducers/cart-reducer';
// import searchReducer from './reducers/search-reducer';

import apiMiddleware from './../redux/middleware/api';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  data: productsReducer,
  cart: cartReducer,
  // search: searchReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(apiMiddleware));

const store = createStore(reducers, enhancer);

export default store;
