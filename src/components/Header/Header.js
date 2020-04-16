import React, { useState } from 'react';
import s from './Header.module.css';
import cart from './../../assets/images/shopping-cart.png';
import { NavLink } from 'react-router-dom';

export const Header = ({ cartCounter, changeSearchText, searchText }) => {
  console.log('Header -> cartCounter', cartCounter);
  return (
    <div className={s.container}>
      <div className={s.search}>
        <input
          type="text"
          placeholder="Search product here..."
          value={searchText}
          onChange={changeSearchText}
          className={s.input}
        />
      </div>

      <div className={s.menu_container}>
        <div className={s.menu_btn}>
          <NavLink to="/products">SHOP</NavLink>
        </div>
        <div className={s.menu_btn}>
          <NavLink to="/blog">BLOG</NavLink>
        </div>
        <div className={s.menu_btn}>
          <NavLink to="/contacts">CONTACT US</NavLink>
        </div>
      </div>
      <div className={s.cart}>
        <NavLink to="/cart">
          <img alt="cart_icon" src={cart} />
        </NavLink>
      </div>
      <div className={s.cart_count}>{cartCounter} products </div>
    </div>
  );
};
