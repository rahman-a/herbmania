import React, {useState} from 'react'
import {
    product,
    product__images,
    product__image,
    product__details,
    product__figure,
    product__name,
    product__desc,
    product__price,
    product__quantity,
    product__quantity_btn,
    product__quantity_num,
    product__cta
} from './ProductDetails.module.scss'

const ProductDetails = () => {
    const [image, setImage] = useState('/img/slide-1.png')
    const [qty, setQty] = useState(1)
    return (
        <div className={product}>
            <div className={product__images}>
                <figure className={product__figure}>
                    <img src="/img/slide-1.png" alt="" onClick={({target:{src}}) => setImage(src)}/>
                </figure>
                <figure className={product__figure}>
                    <img src="/img/slide-2.png" alt="" onClick={({target:{src}}) => setImage(src)}/>
                </figure>
                <figure className={product__figure}>
                    <img src="/img/slide-3.png" alt="" onClick={({target:{src}}) => setImage(src)}/>
                </figure>
            </div>
            <div className={product__image}>
                <img src={image} alt="product" />
            </div>
            <div className={product__details}>
                <h2 className={product__name}>Lorem Ipsum</h2>
                <p className={product__desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio a sequi facere doloribus 
                    quos ipsam obcaecati consequatur molestias provident soluta! Id, at. Sunt reiciendis 
                    eos consectetur quo sequi quibusdam at.
                </p>
                <p className={product__price}>
                    PRICE: &nbsp; 2.99$
                </p>
                <p className={product__quantity}>
                    QUANTITY:&nbsp; <button onClick={qty < 5 && (() => setQty(qty+1))} className={product__quantity_btn}>+</button>
                    <span className={product__quantity_num}>{qty}</span>
                    <button onClick={qty > 1 && (() => setQty(qty-1))} className={product__quantity_btn}>-</button>
                </p>
                <button className={product__cta}>
                    add to cart <i className="fas fa-shopping-basket"></i>
                </button>
            </div>
        </div>
    )
}

export default ProductDetails
