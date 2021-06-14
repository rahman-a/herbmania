import React from 'react'
import {
    product,
    product__wrapper,
    product__figure,
    product__details,
    product__title,
    product__price,
    product__price_discount,
    product__price_full,
    product__rating,
    product__cta
} from './Product.module.scss'
import Rating from '../Rating/Rating'

const Product = () => {
    return (
        <div className={product}>
            <div className={product__wrapper}>
                <figure className={product__figure}>
                    <img src="/img/slide-3.png" alt="" />
                </figure>
                <div className={product__details}>
                    <h4 className={product__title}>Lorem Ipsum</h4>
                    <p className={product__price}>
                        <span className={product__price_discount}>2.99$</span>
                        <span className={product__price_full}>1.99$</span>
                    </p>
                    <div className={product__rating}>
                        <Rating rating={3.5}/>
                    </div>
                    <button className={product__cta}>
                        add to cart <i className="fas fa-shopping-basket"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
