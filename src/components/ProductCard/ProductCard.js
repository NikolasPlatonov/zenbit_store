import React from 'react';
import s from './ProductCard.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cart-action';

const ProductCard = ({ el, addToCart }) => {
  return (
    <div className={s.container_main}>
      <div className={s.container}>
        <div className={s.photo_container}>
          <NavLink to={`/product/` + el.id}>
            <img alt="product_image" src={el.image} className={s.photo} />
          </NavLink>
        </div>
        <div className={s.name}>{el.name}</div>
        <div className={s.price}>{el.price} USD</div>
        <div className={s.button}>
          <button onClick={() => addToCart(el)}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addToCart })(ProductCard);
