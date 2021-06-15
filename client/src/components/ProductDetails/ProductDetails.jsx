import React from 'react'
import {
    product,
    product__images,
    product__image,
    product__details
} from './ProductDetails.module.scss'

const ProductDetails = () => {
    return (
        <div className={product}>
            <div className={product__images}></div>
            <div className={product__image}></div>
            <div className={product__details}></div>
        </div>
    )
}

export default ProductDetails
