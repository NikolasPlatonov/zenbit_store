import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/products-reducer';
import { cartReducer } from './reducers/cart-reducer';
import searchReducer from './reducers/search-reducer';

const reducers = combineReducers({
  data: productsReducer,
  cart: cartReducer,
  // search: searchReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
