import React from 'react'
import {
    products,
    products__wrapper
} from './FeaturedProducts.module.scss'
import Product from '../Product/Product'

function FeaturedProducts() {
    return (
        <div className={products}>
            <div className="container">
                <div className={products__wrapper}>
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
