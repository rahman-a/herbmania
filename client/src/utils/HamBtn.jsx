import React, {useRef} from 'react'
import {hamBtn, hamBtn__line, hamBtn__close} from './utils.module.scss'

const HamBtn = ({openNavHandler}) => {
    let ref = useRef(null)
    const toggleBtn = _ => {
        ref.current.classList.toggle(hamBtn__close)
        if(ref.current.classList.contains(hamBtn__close)) {
            ref.current.parentNode.style.top = '0'
            ref.current.parentNode.style.left = '50vw'
            openNavHandler()
        }else {
            ref.current.parentNode.style.top = '3rem'
            ref.current.parentNode.style.left = '3rem'
            openNavHandler()
        }
    }
    return (
        <div className={hamBtn} onClick={toggleBtn}>
            <span className={hamBtn__line} ref={ref}></span>
        </div>
    )
}

export default HamBtn
