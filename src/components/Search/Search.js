import React, { useEffect } from 'react';
import s from './Search.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { connect } from 'react-redux';
import { addToCart } from './../../redux/actions/cart-action';
import { searchProducts } from './../../redux/actions/products-action';
import { withRouter } from 'react-router-dom';

const Search = ({
  searchProductsList,
  searchProducts,
  addToCart,
  location,
}) => {
  useEffect(() => {
    searchProducts();
  }, [location.search.length]);
  return !searchProductsList.length ? (
    <div className={s.error}>'Nothing found, try changing your query!'</div>
  ) : (
    <div className={s.products_list}>
      {searchProductsList.map((product) => (
        <div key={product.id}>
          <ProductCard el={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    searchProductsList: store.data.searchProducts,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  searchProducts,
})(withRouter(Search));
