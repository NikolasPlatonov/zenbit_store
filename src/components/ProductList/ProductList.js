import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import s from './ProductList.module.css';

export const ProductList = ({ data, addToCart }) => {
  return (
    <div className={s.products_list}>
      {data.map((product) => (
        <div key={product.id}>
          <ProductCard el={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};
