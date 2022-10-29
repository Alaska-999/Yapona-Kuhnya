import React from 'react';
import sushiImg from '../../assets/sushi.jpg';
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Япона кухня</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={sushiImg} alt="Блюдо японської кухні"/>
            </div>
        </React.Fragment>
    );
};

export default Header;