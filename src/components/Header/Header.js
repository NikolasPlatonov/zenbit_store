import React from 'react';
import s from './Header.module.css';
import cart from './../../assets/images/shopping-cart.png';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  return (
    <div className={s.container}>
      <div className={s.search}>
        <input
          type="text"
          placeholder="Search product here..."
          className={s.input}
        />
      </div>

      <div className={s.shop}>
        <NavLink to="/products">SHOP</NavLink>
      </div>
      <div className={s.cart}>
        <NavLink to="/cart">
          <img alt="cart_icon" src={cart} />
        </NavLink>
      </div>
      <div className={s.cart_count}> {props.count} products</div>
    </div>
  );
};
