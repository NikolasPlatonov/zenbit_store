import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/products-reducer';
import { cartReducer } from './reducers/cart-reducer';

const reducers = combineReducers({
  data: productsReducer,
  cart: cartReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
