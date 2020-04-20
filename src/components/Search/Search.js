import React from 'react';
import s from './Search.module.css';
import ProductCard from '../ProductCard/ProductCard';

export const Search = ({ searchProducts, addToCart }) => {
  return searchProducts.length === 0 ? (
    <div className={s.error}>'Nothing found, try changing your query!'</div>
  ) : (
    <div className={s.products_list}>
      {searchProducts.map((product) => (
        <div key={product.id}>
          <ProductCard el={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};
