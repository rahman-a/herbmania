import React from 'react'
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import Collection from '../../components/Collection/Collection'
import HeroProduct from '../../components/HeroProduct/HeroProduct'
import Cards from '../../components/Cards/Cards'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <Carousel/>
            <Collection/>
            <HeroProduct/>
            <Cards/>
            <FeaturedProducts/>
            <FeaturedProducts/>
            <Footer/>
        </main>
        <footer>
            
        </footer>
        </>
        
    )
}

export default Home
