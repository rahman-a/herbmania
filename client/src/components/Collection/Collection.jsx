import React from 'react'
import {
    collection,
    collection__wrapper,
    collection__desc, 
    collection__images,
    collection__subtitle,
    collection__title,
    collection__btn,
    collection__figure,
    collection__image,
    collection__figure_overlay,
    collection__figure_overlay_desc,
    collection__figure_overlay_btn
} from './Collection.module.scss'

const Collection = () => {
    return (
        <div className={collection}>
            <div className="container">
                <div className={collection__wrapper}>
                    <div className={collection__desc}>
                        <p className={collection__subtitle}>Rising Star Collection</p>
                        <h2 className={collection__title}>HERBS</h2>
                        <button className={collection__btn}>Full Collection <i className="fas fa-long-arrow-alt-right"></i></button>
                    </div>
                    <div className={collection__images}>
                        <figure className={collection__figure}>
                            <div className={collection__figure_overlay}>
                                <p className={collection__figure_overlay_desc}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Repellendus tempore
                                </p>
                                <button className={collection__figure_overlay_btn}>See more</button>
                            </div>
                            <img className={collection__image} src="/img/herb (1).png" alt="" />
                        </figure>
                        <figure className={collection__figure}>
                            <div className={collection__figure_overlay}>
                                <p className={collection__figure_overlay_desc}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Repellendus tempore
                                </p>
                                <button className={collection__figure_overlay_btn}>See more</button>
                            </div>
                            <img className={collection__image} src="/img/herb (2).png" alt="" />
                        </figure>
                        <figure className={collection__figure}>
                            <div className={collection__figure_overlay}>
                                <p className={collection__figure_overlay_desc}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Repellendus tempore
                                </p>
                                <button className={collection__figure_overlay_btn}>See more</button>
                            </div>
                            <img className={collection__image} src="/img/herb (3).png" alt="" />
                        </figure>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Collection
