import React from 'react';
import s from './MealItem.module.css'

const MealItem = (props) => {

    const formattedPrice = `$${props.price.toFixed(2)}`

    return (
        <li className={s.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={s.description}>{props.description}</div>
                <div className={s.price}>{formattedPrice}</div>
            </div>
            <div>

            </div>

        </li>
    );
};

export default MealItem;