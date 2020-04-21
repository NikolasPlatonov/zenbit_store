import React from 'react';
import s from './Header.module.css';
import cart from './../../assets/images/shopping-cart.png';
import { NavLink } from 'react-router-dom';
import search_icon from './../../assets/images/search_icon.png';

export const Header = ({
  cartCounter,
  changeSearchText,
  searchText,
  searchProducts,
}) => {
  const keyPressed = (event) => {
    if (event.key === 'Enter') {
      searchProducts();
    }
  };

  return (
    <div className={s.container}>
      <div className={s.search_container}>
        <input
          type="search"
          placeholder="Search..."
          value={searchText}
          onChange={changeSearchText}
          className={s.input}
          // onKeyPress={keyPressed}
        />

        {/* <button className={s.search_btn} onClick={searchProducts}>
          <img alt="search_icon" src={search_icon} />
        </button> */}

        <NavLink to={`/search/?text=` + searchText}>
          <div className={s.search_btn} onClick={searchProducts}>
            <img alt="search_icon" src={search_icon} />
          </div>
        </NavLink>
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
        <NavLink to="/cart">
          <div className={s.cart_image}>
            <div className={s.cart_count}>{cartCounter}</div>
          </div>
        </NavLink>
        <div className={s.menu_btn}>
          <NavLink to="/login">MY_ACCOUNT</NavLink>
        </div>
      </div>
    </div>
  );
};
