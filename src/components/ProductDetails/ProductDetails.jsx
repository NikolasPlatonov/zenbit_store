import React from 'react';
import s from './ProductDetails.module.css'

export const ProductDetails = ({product}) => {
  console.log("ProductDetails -> product", product)
  return (
    <div className={s.container}>
      <div className={s.photo_container}>
        <img alt="product_photo" src={product.image} />

      </div>
      <div className={s.description_container}>
        <div className={s.title}>{product.name}</div>
        <div className={s.description}>
          <div className={s.origin}>{product.origin}</div>
          <div className={s.price}>{product.price} USD</div>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
};