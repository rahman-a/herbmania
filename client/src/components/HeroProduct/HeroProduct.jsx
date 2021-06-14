import React from 'react'
import {
    hero,
    hero__wrapper,
    hero__figure,
    hero__image,
    hero__desc,
    hero__title,
    hero__par,
    hero__cta
} from './HeroProduct.module.scss'

export const HeroProduct = () => {
    return (
        <div className={hero}>
            <div className="container">
                <div className={hero__wrapper}>
                    <figure className={hero__figure}>
                        <img className={hero__image} src="/img/herb (2).png" alt="great herb" />
                    </figure>
                    <div className={hero__desc}>
                        <h1 className={hero__title}>The Great Herb</h1>
                        <p className={hero__par}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam qui 
                            magnam ducimus ipsum molestias eaque exercitationem? Aut, non atque! Culpa
                             magni nisi iusto voluptatibus doloremque nulla aperiam temporibus iste cumque?
                             
                        </p>
                        <button className={hero__cta}>Discover more <i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroProduct