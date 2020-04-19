import React from 'react';
import './App.css';
import { ProductList } from 'components/ProductList/ProductList';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ProductDetails from './ProductDetails/ProductDetails';
import { Header } from './Header/Header';
import Cart from './Cart/Cart';
import { connect } from 'react-redux';
import { addToCart, deleteFromCart } from './../redux/actions/cart-action';
import {
  changeSearchText,
  searchProducts,
} from './../redux/actions/products-action';
import SignUp from './Login/SignUp';

const App = ({
  data,
  cart,
  addToCart,
  cartCounter,
  deleteFromCart,
  searchText,
  changeSearchText,
  searchProducts,
}) => {
  // const addToCart = (product) => {
  //   const existingProduct = cart.find((p) => p.id === product.id);
  //   if (existingProduct) {
  //     const withoutExistingProduct = cart.filter((p) => p.id !== product.id);
  //     const updatedUnitsProduct = {
  //       ...existingProduct,
  //       units: existingProduct.units + 1,
  //     };
  //     setCart([...withoutExistingProduct, updatedUnitsProduct]);
  //     setCartCounter(cartCounter + 1);
  //   } else {
  //     setCart([...cart, { ...product, units: 1 }]);
  //     setCartCounter(cartCounter + 1);
  //   }
  // };

  return (
    <Router>
      <div className="content_main">
        <div className="content">
          <div className="header">
            <Header
              cartCounter={cartCounter}
              changeSearchText={changeSearchText}
              searchText={searchText}
              searchProducts={searchProducts}
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
                render={() => <ProductList data={data} addToCart={addToCart} />}
              />

              <Route
                path="/product/:id"
                render={() => (
                  <ProductDetails data={data} addToCart={addToCart} />
                )}
              />

              <Route path="/login" render={() => <SignUp />} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = (store) => {
  console.log('mapStateToProps -> store', store);
  return {
    data: store.data.searchText
      ? store.data.searchProducts
      : store.data.products,
    cart: store.cart.cart,
    cartCounter: store.cart.cartCounter,
    searchText: store.data.searchText,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  deleteFromCart,
  changeSearchText,
  searchProducts,
})(App);
