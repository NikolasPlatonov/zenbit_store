import React from 'react';
import {Product} from '../Product/Product';


export const ProductList = ({data}) => {
  return (data.map((product) => (
    <div key={product.id}>
      <Product el={product} />
    </div>
  )
  ));
};
