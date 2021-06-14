import React from 'react'
import {
    card,
    card__figure,
    card__image,
    card__desc,
    card__title,
    card__par
} from './ProductCard.module.scss'

const ProductCard = ({title, description, image}) => {
    return (
        <div className={card}>
            <figure className={card__figure}>
                <img className={card__image} src={image} alt="lorem" />
            </figure>
            <div className={card__desc}>
                <h4 className={card__title}>{title}</h4>
                <p className={card__par}>{description}</p>
            </div>
        </div>
    )
}

export default ProductCard
