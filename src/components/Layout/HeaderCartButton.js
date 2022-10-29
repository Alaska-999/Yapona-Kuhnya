import React from 'react';
import CartIcon from "../Cart/CartIcon";
import s from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    return (
        <button className={s.button}>
            <span className={s.icon}>
                <CartIcon/>
            </span>
            <span>Кошик</span>
            <span className={s.badge}>2</span>
        </button>
    );
};

export default HeaderCartButton;