import React from 'react'
import {cart__line, cart__total, cart__option, cart__main, cart__checkout} from './MiniCartOptions.module.scss'

const MiniCartOptions = ({total}) => {
    const goToCartHandler = _ => {
        console.log('GO TO CART');
    }
    const checkoutHandler = _ => {
        console.log('PROCEED TO CHECKOUT');
    }
    return (
        <>                     
            <div className={cart__line}></div>
            <div className={cart__total}>
                <p>TOTAL</p>
                <p>{total.toFixed(2)}$</p>
            </div>
            <div className={cart__line}></div>
            <div className={cart__option}>
                <button className={cart__main} onClick={goToCartHandler}>Go to Cart</button>
                <button className={cart__checkout} onClick={checkoutHandler}>Checkout</button>
            </div>
        </> 
    )
}

export default MiniCartOptions
