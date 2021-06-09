import React, {useState} from 'react'
import {
    header, 
    header__logo, 
    header__search, 
    header__option, 
    header__auth, 
    header__cart, 
    header__lang, 
    header__wrapper,
    header__cart_num,
    header__item,
    header__link,
    header__cart_wrapper,
    header__cart_msg
} from './Header.module.scss'
import Logo from '../../images/logo.png'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import MiniCartItems from '../MiniCartItems/MiniCartItems'
import MiniCartOptions from '../MiniCartOptions/MiniCartOptions'

const Header = () => {
    const [lang, setLang] = useState('EN')
    // eslint-disable-next-line
    const [isAuth, setIsAuth] = useState(true)
    const lang_option = [
        {
            id:1,
            lang:'English',
            symbol:'EN',
            flag:'gb'
        },
        {
            id:2,
            lang:'Arabic',
            symbol:'AR',
            flag:'eg'

        }
    ]

    const cartItems = 
    [
        // {
        //     id:1,
        //     name:'Febula Auria 100g',
        //     image:'/img/herb (1).png',
        //     price:1.98
        // },
        // {
        //     id:2,
        //     name:'Santina Sera 100g',
        //     image:'/img/herb (2).png',
        //     price:2.98
        // },
        // {
        //     id:3,
        //     name:'Yamto Ratil sntrigh amoudah 100g',
        //     image:'/img/herb (3).png',
        //     price:1.98
        // }
        
    ]

    const langHandler = (value) => {
        setLang(value)
    }
   
    return (
        <div className={header}>
            <div className="container">
                <div className={header__wrapper}>

                    {/* LOGO BLOCK */}
                    <div className={header__logo}>
                        <img src={Logo} alt="logo"/>
                    </div>

                    {/* SEARCH BLOCK */}
                    <div className={header__search}>

                        <input type="search"  placeholder='search by product name'/>
                        <i className="fas fa-search"></i>
                    </div>

                    <div className={header__option}>
                        {/* LOGIN && LOGOUT && SIGN UP BLOCK  */}
                        <div className={header__auth}>
                           {
                             isAuth 
                             ? <div>Hi Ahmed &nbsp; 
                                 <i className="fas fa-chevron-down"></i>
                                 <DropdownMenu>
                                    <li className={header__item}>
                                        <i className="fas fa-address-card"></i> 
                                        {/* eslint-disable-next-line */}
                                        <a href="#" className={header__link}>Profile</a> 
                                    </li>
                                    <li className={header__item}>
                                        <i className="fas fa-user-cog"></i>
                                        {/* eslint-disable-next-line */}
                                        <a href="#" className={header__link}>Setting</a>
                                    </li>
                                    <li className={header__item}>
                                        <i class="fas fa-tachometer-alt"></i>
                                        {/* eslint-disable-next-line */}
                                        <a href="#" className={header__link}>Dashboard</a>
                                    </li>
                                    <li className={header__item}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        {/* eslint-disable-next-line */}
                                        <a href="#" className={header__link}>logout</a>
                                    </li>
                                 </DropdownMenu>
                              </div>
                             : <i className="fas fa-user"></i>
                            }
                        </div>

                        {/* CART BLOCK */}
                        <div className={header__cart}>
                                {cartItems 
                                && cartItems.length > 0 
                                && <span className={header__cart_num}>{cartItems.length}</span>}
                                <i className="fas fa-shopping-basket"></i>
                            <DropdownMenu>
                                {
                                cartItems && cartItems.length >0
                                ?
                                (<>
                                <li className={header__cart_wrapper}>
                                    {cartItems && cartItems.map(item => (
                                    <MiniCartItems 
                                    key={item.id} 
                                    name={item.name} 
                                    image={item.image} 
                                    price={item.price}
                                    id={item.id}/>
                                ))}
                                </li>
                               <MiniCartOptions total={cartItems.reduce((acc, it) => it.price + acc, 0)}/>
                               </>)
                                : (
                                    <>
                                        <div className={header__cart_msg}>
                                            <i className="fas fa-cart-arrow-down"></i>
                                            <p>Your Cart is Empty</p>
                                        </div>
                                    </>
                                )
                                }
                            </DropdownMenu>
                        </div>

                        {/* LANGUAGE OPTIONS BLOCK */}
                        <div className={header__lang}>
                            {lang} <i className="fas fa-chevron-down"></i>
                            <DropdownMenu>
                                {lang_option.map(lg => (
                                <li 
                                className={header__item} 
                                onClick={() => langHandler(lg.symbol)}
                                key={lg.id}>
                                    <span className={`flag-icon flag-icon-${lg.flag}`} style={{marginRight:'1rem'}}></span>  
                                    {lg.lang} - {lg.symbol}
                                </li>
                                ))}
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Header
