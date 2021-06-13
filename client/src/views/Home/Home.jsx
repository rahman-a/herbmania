import React from 'react'
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import Collection from '../../components/Collection/Collection'

const Home = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <Carousel/>
            <Collection/>
        </main>
        <footer>
            
        </footer>
        </>
        
    )
}

export default Home
