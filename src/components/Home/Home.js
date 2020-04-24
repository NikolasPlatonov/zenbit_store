import React from 'react';
import s from './Home.module.css';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={s.main_container}>
      <div className={s.main_title}>Welcome to the SHOP</div>
      <div className={s.container}>
        <div className={s.item_container}>
          <div className={s.item_photo}>
            <img
              alt="big_photo1"
              src="https://www.duotonesports.com/fileadmin/_processed_/9/b/csm_IdolLtd_Gollito_Maui_JC_F18_WS_DY3_D1_7693_3_88653bfb66.jpg"
            />
          </div>
          <NavLink to="/products" className={s.item_btn}>
            <button>TRUE KITEBOARDING</button>
          </NavLink>
        </div>
        <div className={s.item_container}>
          <div className={s.item_photo}>
            <img
              alt="big_photo2"
              src="https://www.duotonesports.com/fileadmin/_processed_/5/8/csm_Marco_Jordy_Jag_DT_JohnCarter_F18_WS_DY6_D2_4730_b59ce82ca6.jpg"
            />
          </div>
          <NavLink to="/products" className={s.item_btn}>
            <button>TRUE WINDSURFING</button>
          </NavLink>
        </div>
        <div className={s.item_container}>
          <div className={s.item_photo}>
            <img
              alt="big_photo3"
              src="https://www.duotonesports.com/uploads/tx_productprofile/Duotone_Foil_Wing_Sky_Solbach_11.png"
            />
          </div>
          <NavLink to="/products" className={s.item_btn}>
            <button>FOIL WING</button>
          </NavLink>
        </div>
      </div>
      <div className={s.text}>
        Because every session has to be the best! Out of this inspiration, we
        want to enhance your personal experience of true kiteboarding and true
        windsurfing. Therefore we develop the most innovative and high-quality
        kiteboarding and windsurfing products for sports that we all love. Enter
        the world of DUOTONE right now!
      </div>
    </div>
  );
};
