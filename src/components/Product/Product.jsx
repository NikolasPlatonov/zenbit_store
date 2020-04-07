import React from 'react';
import s from './Product.module.css';

export const Product = ({el}) => {
  return (
    <div className={s.container}>
      <div className={s.photo_container}>
        <img alt="product_image" src={el.image} className={s.photo} />
      </div>
      <div className={s.name}>{el.name}</div>
      <div className={s.price}>{el.price} USD</div>
      <button
        className={s.button}
      >
        ADD TO CART
    </button>
    </div>
  )
}