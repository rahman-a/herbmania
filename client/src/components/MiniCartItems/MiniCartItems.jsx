import React from 'react'
import {cart__item, cart__image, cart__name, cart__price} from './MiniCartItems.module.scss'

const MiniCartItems = ({name, image, price,id}) => {
    const removeItemHandler = id => {
        console.log(id);
    }
    return (
        <div className={cart__item}>
            <img className={cart__image} src={image} alt={name} />
            <p className={cart__name}>{name}</p>
            <p>x1</p>
            <p className={cart__price}>{price}$</p>
            <i className="fas fa-trash" onClick={() => removeItemHandler(id)}></i>
        </div>
    )
}

export default MiniCartItems
