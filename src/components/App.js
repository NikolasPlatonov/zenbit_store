import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import ProductDetails from './ProductDetails/ProductDetails';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import { ProductList } from 'components/ProductList/ProductList';
import SignUp from './Login/SignUp';
import Search from './Search/Search';
import { Help } from './Help/Help';
import { Blog } from './Blog/Blog';
import { Home } from './Home/Home';

import { addToCart, deleteFromCart } from './../redux/actions/cart-action';
import {
  changeSearchText,
  onSetProducts,
} from './../redux/actions/products-action';
import Preloader from '../common/preloader/Preloader';

const App = ({
  data,
  cart,
  totalPrice,
  addToCart,
  cartCounter,
  deleteFromCart,
  searchText,
  changeSearchText,
  onSetProducts,
  isLoader,
}) => {
  useEffect(() => {
    !data.length && onSetProducts();
  }, []);

  return (
    <Router>
      <div className="content_main">
        <div className="preloader">{isLoader && <Preloader />}</div>
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
              <Route path="/search" render={() => <Search />} />

              <Route path="/home" render={() => <Home />} />

              <Route
                exact
                path="/products"
                render={() => <ProductList data={data} addToCart={addToCart} />}
              />

              <Route path="/help" render={() => <Help />} />

              <Route path="/blog" render={() => <Blog />} />

              <Route
                path="/cart"
                render={() => (
                  <Cart
                    cart={cart}
                    totalPrice={totalPrice}
                    deleteFromCart={deleteFromCart}
                  />
                )}
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
  return {
    data: store.data.products,
    cart: store.cart.cart,
    totalPrice: store.cart.totalPrice,
    cartCounter: store.cart.cartCounter,
    searchText: store.data.searchText,
    isLoader: store.data.isLoader,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  deleteFromCart,
  changeSearchText,
  onSetProducts,
})(App);
