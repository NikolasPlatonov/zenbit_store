import { createStore, combineReducers, applyMiddleware } from 'redux';
import productsReducer from './reducers/products-reducer';
import { cartReducer } from './reducers/cart-reducer';

import apiMiddleware from './../redux/middleware/api';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  data: productsReducer,
  cart: cartReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(apiMiddleware));

const store = createStore(reducers, enhancer);

export default store;
