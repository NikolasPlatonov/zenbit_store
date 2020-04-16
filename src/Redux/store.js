import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/products-reducer';

const reducers = combineReducers({
  products: productsReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
