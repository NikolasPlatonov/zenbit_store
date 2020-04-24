import React from 'react';
import s from './Cart.module.css';

const Cart = ({ cart, totalPrice, deleteFromCart }) => {
  return !cart.length ? (
    <div className={s.error}>YOUR CART IS EMPTY</div>
  ) : (
    <div className={s.container}>
      <div className={s.title_container}>
        <div className={s.title}>Product</div>
        <div className={s.title}>Price</div>
        <div className={s.title}>Quantity</div>
        <div className={s.title}>Subtotal</div>
      </div>
      <div>
        {cart.map((item) => {
          return (
            <div className={s.order_container} key={item.id}>
              <button
                className={s.order_delete}
                onClick={() => deleteFromCart(item.id, item.units, item.price)}
              >
                &#215;
              </button>
              <div className={s.order_photo}>
                <img alt="product_photo" src={item.image} />
              </div>
              <div className={s.order_name}>{item.name}</div>
              <div className={s.order_price}>{item.price}</div>
              <div className={s.order_quantity}>{item.units}</div>
              <div className={s.order_price}>{item.price * item.units}</div>
            </div>
          );
        })}

        <div className={s.total_container}>
          <div className={s.total_text}>TOTAL:</div>
          <div className={s.total_price}>{totalPrice}</div>
        </div>
      </div>

      <div className={s.btn_container}>
        <button className={s.button}>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
