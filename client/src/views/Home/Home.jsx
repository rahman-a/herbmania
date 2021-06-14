import React from 'react'
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import Collection from '../../components/Collection/Collection'
import HeroProduct from '../../components/HeroProduct/HeroProduct'

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
        </main>
        <footer>
            
        </footer>
        </>
        
    )
}

export default Home
