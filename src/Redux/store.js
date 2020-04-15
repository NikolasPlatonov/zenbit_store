import { createStore, combineReducers } from 'redux';
import productsReducer from './Reducers/products-reducer';

let reducers = combineReducers({
  productsPage: productsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
