import React, {FC} from 'react';
import {ReactComponent as BasketIcon} from '../../../assets/images/header/basket.svg';
import classes from './Basket.module.css';

const Basket: FC = () => {
    return (
        <div className={classes.basketWrapper}>
            <BasketIcon/>
            <div className={classes.countProducts}>10+</div>
        </div>
    )
}

export default Basket;