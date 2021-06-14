import React from 'react'
import {
    product,
    product__wrapper,
    product__figure,
    product__figure_wrapper,
    product__details,
    product__title,
    product__price,
    product__price_discount,
    product__rating,
    product__cta,
    // Vertical Classes
    product__figure_vrt,
    product__wrapper_vrt,
    product_vrt,
    product__figure_vrt_wrapper,
    product__details_vrt,
    product__cta_vrt
} from './ProductCard.module.scss'
import Rating from '../Rating/Rating'

const Product = ({image, name, price, discount, rating, vertical}) => {
    return (
        <div className={` ${product} ${vertical && product_vrt}`}>
            <div className={`${product__wrapper} ${vertical && product__wrapper_vrt}`}>
                <figure className={`${product__figure} ${vertical && product__figure_vrt}`}>
                    <div className={`${product__figure_wrapper} ${vertical && product__figure_vrt_wrapper}`}>
                        <img src={image} alt="" />
                    </div>
                </figure>
                <div className={`${product__details} ${vertical && product__details_vrt}`}>
                    <h4 className={product__title}>{name}</h4>
                    <p className={product__price}>
                        <span className={discount && product__price_discount}>{price}$</span>
                        {discount && <span>{(price * discount / 100).toFixed(2)}$</span>}
                    </p>
                    <div className={product__rating}>
                        <Rating rating={rating}/>
                    </div>
                    <button className={`${product__cta} ${vertical && product__cta_vrt}`}>
                        add to cart <i className="fas fa-shopping-basket"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
