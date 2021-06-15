import React from 'react'
import {
    categories,
    categories__wrapper,
    categories__desc,
    categories__title,
    categories__par,
    categories__graph
} from './FeaturedCategories.module.scss'
import Graph from '../CategoriesGraph/CategoriesGraph'

const FeaturedCategories = () => {
    return (
        <div className={categories}>
            <div className="container">
                <div className={categories__wrapper}>
                    <div className={categories__desc}>
                        <h2 className={categories__title}>Featured Categories</h2>
                        <p className={categories__par}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt at 
                            veniam qui aliquam. Repellendus illo itaque blanditiis! Eligendi quo 
                            quas doloribus ullam iusto natus, illum provident et consequatur non qui!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt at 
                            veniam qui aliquam. Repellendus illo itaque blanditiis! Eligendi quo 
                            quas doloribus ullam iusto natus, illum provident et consequatur non qui!
                        </p>
                    </div>
                    <div className={categories__graph}>
                        <Graph/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCategories
