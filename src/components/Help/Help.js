import React from 'react';
import s from './Help.module.css';
import cart from './../../assets/images/shopping-cart.png';
import hanger from './../../assets/images/hanger_icon.png';
import wallet from './../../assets/images/wallet_icon.png';
import box from './../../assets/images/box_icon.png';
import arrow from './../../assets/images/cycle_arrow_icon.png';
import company from './../../assets/images/house_icon.png';

export const Help = () => {
  return (
    <div className={s.container}>
      <div className={s.help_container}>
        <div className={s.help_item}>
          <div className={s.help_img}>
            <img alt="shop_icon" src={cart} />
          </div>
          <div className={s.help_text}>Shop at Shop.com</div>
        </div>
        <div className={s.help_item}>
          <div className={s.help_img}>
            <img alt="hanger_icon" src={hanger} />
          </div>
          <div className={s.help_text}>Product</div>
        </div>
        <div className={s.help_item}>
          <div className={s.help_img}>
            <img alt="wallet_icon" src={wallet} />
          </div>
          <div className={s.help_text}>Payment</div>
        </div>
      </div>
      <div className={s.help_container}>
        <div className={s.help_item}>
          <div className={s.help_img}>
            <img alt="box_icon" src={box} />
          </div>
          <div className={s.help_text}>Shipping</div>
        </div>
        <div className={s.help_item}>
          <div className={s.help_img}>
            <img alt="arrow_icon" src={arrow} />
          </div>
          <div className={s.help_text}>Exchanges and returns</div>
        </div>
        <div className={s.help_item}>
          <div className={s.help_img}>
            <img alt="company_icon" src={company} />
          </div>
          <div className={s.help_text}>Shops and company</div>
        </div>
      </div>
    </div>
  );
};
