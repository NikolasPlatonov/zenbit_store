import React, {useState} from 'react';
import s from './ProductCard.module.css';
import ReactCardFlip from 'react-card-flip'
import sold_out from '../../assets/images/sold-out.png'
import {NavLink} from 'react-router-dom';

export const ProductCard = ({el}) => {
  const [isFlipped, changeFlipped] = useState(false)
  const onChangeFlipped = () => {
    changeFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className={s.container}>
        <div className={s.photo_container}>
          <NavLink to={`/product/` + el.id}>
            <img alt="product_image" src={el.image} className={s.photo} />
          </NavLink>
        </div>
        <div className={s.name}>{el.name}</div>
        <div className={s.price} onClick={onChangeFlipped}>{el.price} USD</div>
        <button
          className={s.button}

        >
          ADD TO CART
        </button>
      </div>

      <div className={s.container}>
        <div className={s.photo_container}>
          <img alt="sold_out" src={sold_out} className={s.photo} />
        </div>
        <div className={s.name}>{el.name}</div>
        <div className={s.price} onClick={onChangeFlipped}>{el.price} USD</div>
        <button
          className={s.button}
        >
          ADD TO CART
        </button>
      </div>
    </ReactCardFlip>
  )
}