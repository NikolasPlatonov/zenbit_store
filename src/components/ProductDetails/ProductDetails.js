import React from 'react';
import s from './ProductDetails.module.css';
import { withRouter } from 'react-router-dom';

const ProductDetails = (props) => {
  const details = props.data.find((item) => item.id === props.match.params.id);

  return (
    <div className={s.container}>
      <div className={s.photo_container}>
        <img alt="product_photo" src={details.image} />
      </div>
      <div className={s.description_container}>
        <div className={s.title}>{details.name}</div>
        <div className={s.description}>
          <div className={s.origin}>{details.origin}</div>
          <div className={s.price}>{details.price} USD</div>
          <button onClick={() => props.addToCart(details)}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductDetails);
