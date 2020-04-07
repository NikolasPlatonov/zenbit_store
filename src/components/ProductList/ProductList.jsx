import React from 'react';
import {ProductCard} from '../ProductCard/ProductCard';


export const ProductList = ({data}) => {
  return (data.map((product) => (
    <div key={product.id}>
      <ProductCard el={product} />
    </div>
  )
  ));
};
