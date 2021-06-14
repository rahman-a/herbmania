import React from 'react'
import {
    products,
    products__wrapper
} from './FeaturedProducts.module.scss'
import Product from '../Product/Product'

function FeaturedProducts() {
    const all_products = [
        {
            id:0,
            name:'Lorem Ipsum 0',
            image:'/img/slide-1.png',
            rating:3,
            price:2.99,
            discount:50
        },
        {
            id:1,
            name:'Lorem Ipsum 1',
            image:'/img/slide-2.png',
            rating:4.5,
            price:3.69,
        },
        {
            id:2,
            name:'Lorem Ipsum 2',
            image:'/img/slide-3.png',
            rating:2.5,
            price:1.59,
        },
    ]
    return (
        <div className={products}>
            <div className="container">
                <div className={products__wrapper}>
                    {all_products.map(prd => (
                        <Product key={prd.id}
                        name={prd.name}
                        image={prd.image}
                        rating={prd.rating}
                        price={prd.price}
                        discount={prd.discount}
                        />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
