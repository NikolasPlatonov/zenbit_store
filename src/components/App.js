import React, { useState } from 'react';
import './App.css';
import { ProductList } from 'components/ProductList/ProductList';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ProductDetails from './ProductDetails/ProductDetails';
import { Header } from './Header/Header';
import Cart from './Cart/Cart';
import { connect } from 'react-redux';
import store from '../Redux/store';

const App = ({ data }) => {
  const [cart, setCart] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [searchText, setSearchText] = useState('');

  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      const withoutExistingProduct = cart.filter((p) => p.id !== product.id);
      const updatedUnitsProduct = {
        ...existingProduct,
        units: existingProduct.units + 1,
      };
      setCart([...withoutExistingProduct, updatedUnitsProduct]);
      setCartCounter(cartCounter + 1);
    } else {
      setCart([...cart, { ...product, units: 1 }]);
      setCartCounter(cartCounter + 1);
    }
  };

  const deleteFromCart = (id, units) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setCartCounter(cartCounter - units);
  };

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const searchProduct = (products) => {
    return products.filter((e) => {
      return (
        e.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        e.origin.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        null
      );
    });
  };

  return (
    <Router>
      <div className="content">
        <div className="header">
          <Header
            cartCounter={cartCounter}
            changeSearchText={changeSearchText}
            searchText={searchText}
          />
        </div>
        <div className="products_container">
          <div>
            <Route
              path="/cart"
              render={() => (
                <Cart cart={cart} deleteFromCart={deleteFromCart} />
              )}
            />

            <Route
              exact
              path="/products"
              render={() => (
                <ProductList
                  data={data}
                  addToCart={addToCart}
                  searchProduct={searchProduct}
                />
              )}
            />

            <Route
              path="/product/:id"
              render={() => (
                <ProductDetails data={data} addToCart={addToCart} />
              )}
            />
          </div>
          <div></div>
        </div>
      </div>
    </Router>
  );
};

const mapToProps = (store) => {
  console.log('mapToProps -> store', store);
  return {
    data: store.products.products,
  };
};

export default connect(mapToProps)(App);
