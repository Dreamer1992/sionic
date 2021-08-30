import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import classes from './Products.module.css';
import {productSelector} from "../../store/orm/models/ProductSelector";

const Products: FC = () => {
    const products = useSelector(productSelector)

    return (
        <div className={classes.products}>
            <h2>Категория товаров</h2>

            <div className={classes.productsList}>
                {products.map(product => {
                    return (
                        <div className={classes.productsItem}>
                            <div>
                                <img src="https://via.placeholder.com/150" alt=""/>
                            </div>
                            <div>{product.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>


    )
}

export default Products;