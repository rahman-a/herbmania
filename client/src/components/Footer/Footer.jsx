import React from 'react'
import {
    footer,
    footer__logo,
    footer__desc,
    footer__social,
    footer__social_link,
    footer__legal,
    footer__legal_link,
    footer__copyright
} from './Footer.module.scss'
import Logo from '../../images/logo.png'

const Footer = () => {
    const date = new Date()
    return (
        <div className={footer}>
                <div className={footer__logo}>
                    <img src={Logo} alt="logo" />
                </div>
                <p className={footer__desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, expedita. 
                    Saepe, qui maiores dicta quo dolor autem ut animi impedit, debitis fugiat nam, 
                    labore doloremque minima aut inventore accusamus dolorem.
                </p>
                <div className={footer__social}>
                     {/* eslint-disable-next-line */}
                    <a href='#' className={footer__social_link}><i className="fab fa-facebook"></i></a>
                     {/* eslint-disable-next-line */}
                    <a href='#' className={footer__social_link}><i className="fab fa-twitter"></i></a>
                     {/* eslint-disable-next-line */}
                    <a href='#' className={footer__social_link}><i className="fab fa-instagram"></i></a>
                </div>
                <div className={footer__legal}>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={footer__legal_link}>Contact us</a>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={footer__legal_link}>Terms & Condition</a>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={footer__legal_link}>Privacy Policy</a>
                    {/* eslint-disable-next-line */}
                    <a href="#" className={footer__legal_link}>Return Policy</a>
                </div>
                <p className={footer__copyright}>
                    copyrights {date.getFullYear()} &copy; all rights reserved
                </p>
        </div>
    )
}

export default Footer
