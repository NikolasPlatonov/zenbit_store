import React, {useState} from 'react';
import s from './Product.module.css';
import ReactCardFlip from 'react-card-flip'
import sold_out from '../../assets/images/sold-out.png'

export const Product = ({el}) => {
  const [isFlipped, changeFlipped] = useState(false)
  const onChangeFlipped = () => {
    changeFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className={s.container}>
        <div className={s.photo_container}>
          <img alt="product_image" src={el.image} className={s.photo} onClick={onChangeFlipped} />
        </div>
        <div className={s.name}>{el.name}</div>
        <div className={s.price}>{el.price} USD</div>
        <button
          className={s.button}
        >
          ADD TO CART
        </button>
      </div>

      <div className={s.container}>
        <div className={s.photo_container}>
          <img alt="sold_out" src={sold_out} className={s.photo} onClick={onChangeFlipped} />
        </div>
        <div className={s.name}>{el.name}</div>
        <div className={s.price}>{el.price} USD</div>
        <button
          className={s.button}
        >
          ADD TO CART
        </button>
      </div>
    </ReactCardFlip>
  )
}