import React from 'react'
import Template from '../../components/Template/Template'
import {product} from './Product.module.scss'
import ProductDetails from '../../components/ProductDetails/ProductDetails'

const Product = () => {
    return (
        <Template>
           <div className={product}>
               <div className="container">
                    <ProductDetails/>
               </div>
           </div>
        </Template>
    )
}

export default Product
