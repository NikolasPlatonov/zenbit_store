import React from 'react';
import s from './Header.module.css';
import { NavLink, withRouter } from 'react-router-dom';
import search_icon from './../../assets/images/search_icon.png';

const Header = ({ cartCounter, changeSearchText, searchText, history }) => {
  const keyPressed = (event) => {
    if (event.key === 'Enter') {
      history.push(`/search/?text=` + searchText);
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
          onKeyPress={keyPressed}
        />

        <NavLink to={`/search/?text=` + searchText}>
          <div className={s.search_btn}>
            <img alt="search_icon" src={search_icon} />
          </div>
        </NavLink>
      </div>

      <div className={s.menu_container}>
        <div className={s.menu_btn}>
          <NavLink to="/home" activeClassName={s.active}>
            HOME
          </NavLink>
        </div>
        <div className={s.menu_btn}>
          <NavLink to="/products" activeClassName={s.active}>
            SHOP
          </NavLink>
        </div>
        <div className={s.menu_btn}>
          <NavLink to="/blog" activeClassName={s.active}>
            BLOG
          </NavLink>
        </div>
        <div className={s.menu_btn}>
          <NavLink to="/help" activeClassName={s.active}>
            HELP
          </NavLink>
        </div>

        <div className={s.menu_btn}>
          <NavLink to="/cart">
            <div className={s.cart_image}>
              <div className={s.cart_count}>{cartCounter}</div>
            </div>
          </NavLink>
        </div>

        <div className={s.menu_btn}>
          <NavLink to="/login" activeClassName={s.active}>
            ACCOUNT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
