import React from 'react'
import Template from '../components/Template/Template'
import Carousel from '../components/Carousel/Carousel'
import Collection from '../components/Collection/Collection'
import HeroProduct from '../components/HeroProduct/HeroProduct'
import Cards from '../components/Cards/Cards'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import FeaturedCategories from '../components/FeaturedCategories/FeaturedCategories'

const Home = () => {
    return (
       <Template>
            <Carousel/>
            <Collection/>
            <HeroProduct/>
            <Cards/>
            <FeaturedProducts/>
            <FeaturedCategories/>
            <FeaturedProducts/>  
       </Template>        
    )
}

export default Home
