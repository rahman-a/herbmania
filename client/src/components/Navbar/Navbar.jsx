import React, {useRef, useEffect} from 'react'
import {
    navbar,
    navbar__list,
    navbar__item,
    navbar__link,
} from './Navbar.module.scss'

const Navbar = ({isOpen}) => {
    const ref =  useRef(null)
    useEffect(() => {
        if(isOpen) {
            ref.current.style.left= 0
        }else {
            ref.current.style.left= '-60vw'
        }
    },[isOpen])
    
    return (
        <div className={navbar} ref={ref}>
            <ul className={navbar__list} >
                <li className={navbar__item}>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={navbar__link}>Link 1</a>
                </li>
                <li className={navbar__item}>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={navbar__link}>Link 2</a>
                </li>
                <li className={navbar__item}>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={navbar__link}>Link 3</a>
                </li>
                <li className={navbar__item}>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={navbar__link}>Link 4</a>
                </li>
                <li className={navbar__item}>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={navbar__link}>Link 1</a>
                </li>
                <li className={navbar__item}>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={navbar__link}>Link 2</a>
                </li>
                <li className={navbar__item}>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={navbar__link}>Link 3</a>
                </li>
                <li className={navbar__item}>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={navbar__link}>Link 4</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
