import React, {useRef, useEffect} from 'react'
import {blur, blur_show} from './utils.module.scss'

const BlurBackground = ({isOpen}) => {
    const ref = useRef(null)

    useEffect(() => {
        if(isOpen) {
            ref.current.classList.add(blur_show)
        }else {
            ref.current.classList.remove(blur_show)
        }
    }, [isOpen])

    return (
        <div className={blur} ref={ref}></div> 
        )
    } 

export default BlurBackground
