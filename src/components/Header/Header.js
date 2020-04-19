import React, { useState } from 'react';
import s from './Header.module.css';
import cart from './../../assets/images/shopping-cart.png';
import { NavLink } from 'react-router-dom';
import search_icon from './../../assets/images/search_icon.png';

export const Header = ({ cartCounter, changeSearchText, searchText }) => {
  return (
    <div className={s.container}>
      <div className={s.search_container}>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={changeSearchText}
          className={s.input}
        />
        <div className={s.search_icon}>
          {' '}
          <img alt="search_icon" src={search_icon} />{' '}
        </div>
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
        <div>
          <div className={s.cart}>
            <NavLink to="/cart">
              <img alt="cart_icon" src={cart} />
            </NavLink>
            <div className={s.cart_count}>
              <div>{cartCounter}</div>
              <div className={s.count_text}></div>
            </div>
          </div>
        </div>
        <div className={s.menu_btn}>
          <NavLink to="/login">LOGIN/SIGN_UP</NavLink>
        </div>
      </div>
    </div>
  );
};
