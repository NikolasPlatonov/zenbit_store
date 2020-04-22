import { createStore, combineReducers, applyMiddleware } from 'redux';
import apiMiddleware from './../redux/middleware/api';
import { composeWithDevTools } from 'redux-devtools-extension';

import productsReducer from './reducers/products-reducer';
import { cartReducer } from './reducers/cart-reducer';

const reducers = combineReducers({
  data: productsReducer,
  cart: cartReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(apiMiddleware));

const store = createStore(reducers, enhancer);

export default store;
