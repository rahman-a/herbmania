import React from "react"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Template = ({children}) => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>  
        </>
    )
}

export default Template
