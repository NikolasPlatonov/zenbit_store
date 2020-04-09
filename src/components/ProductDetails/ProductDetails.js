import React from 'react';
import s from './ProductDetails.module.css';
import { withRouter } from 'react-router-dom';

const ProductDetails = (props) => {
  const details = [];
  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].id === props.match.params.id) {
      details.push(props.data[i]);
    }
  }

  return (
    <div className={s.container}>
      <div className={s.photo_container}>
        <img alt="product_photo" src={details[0].image} />
      </div>
      <div className={s.description_container}>
        <div className={s.title}>{details[0].name}</div>
        <div className={s.description}>
          <div className={s.origin}>{details[0].origin}</div>
          <div className={s.price}>{details[0].price} USD</div>
          <button onClick={() => props.addToCart(details[0])}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductDetails);
