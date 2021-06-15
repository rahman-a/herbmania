import React, {useState} from 'react'
import Template from '../../components/Template/Template'
import {
    products,
    products__bar,
    products__wrapper,
    products__wrapper_vrt
} from './Products.module.scss'
import ProductBar from '../../components/ProductBar/ProductBar'
import ProductCard from '../../components/ProductCard/ProductCard'
import {all_products} from '../../sample_data'

const Products = () => {
    const [page, setPage] = useState(10)
    const [sort, setSort] = useState('featured')
    const [view, setView] = useState('horizontal')
    return (
        <Template>
            <div className={products}>
                <div className="container">
                    <div className={products__bar}>
                        <ProductBar 
                        page={page}
                        sort={sort}
                        view={view}
                        setPageHandler={setPage}
                        setSortHandler={setSort}
                        setViewHandler={setView}/>
                    </div>
                    <div className={`${products__wrapper} ${view === 'vertical' && products__wrapper_vrt}`}>
                        {all_products.map(prd => (
                            <ProductCard key={prd.id}
                            name={prd.name}
                            image={prd.image}
                            price={prd.price}
                            discount={prd.discount}
                            rating={prd.rating}
                            vertical={view === 'vertical' ? true : false}/>
                        ))}
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default Products
