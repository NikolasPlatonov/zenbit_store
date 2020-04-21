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
import { Search } from './Search/Search';
import { Help } from './Help/Help';
import { Blog } from './Blog/Blog';

const App = ({
  data,
  cart,
  addToCart,
  cartCounter,
  deleteFromCart,
  searchText,
  changeSearchText,
  searchProducts,
  searchProductsList,
}) => {
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
                path="/search"
                render={() => (
                  <Search
                    searchProducts={searchProductsList}
                    addToCart={addToCart}
                  />
                )}
              />

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
                  <Cart cart={cart} deleteFromCart={deleteFromCart} />
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
  console.log('mapStateToProps -> store', store);
  return {
    // data: store.data.searchText
    //   ? store.data.searchProducts
    //   : store.data.products,
    data: store.data.products,
    cart: store.cart.cart,
    cartCounter: store.cart.cartCounter,
    searchText: store.data.searchText,
    searchProductsList: store.data.searchProducts,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  deleteFromCart,
  changeSearchText,
  searchProducts,
})(App);
