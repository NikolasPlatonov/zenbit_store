import React from 'react';
import s from './Cart.module.css';

const Cart = () => {
  return (
    <div className={s.container}>
      <div className={s.title_container}>
        <div className={s.title}>Product</div>
        <div className={s.title}>Price</div>
        <div className={s.title}>Quantity</div>
        <div className={s.title}>Subtotal</div>
      </div>
      <div className={s.btn_container}>
        <button className={s.button}>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
