import React, {useRef} from 'react'
import {useDetectClickOutside} from 'react-detect-click-outside'
import { 
    drop__list,
    drop__wrapper
} from './DropdownMenu.module.scss'

const DropdownMenu = ({children}) => {
    
    const listRef = useRef(null)
    const listWrapperRef = useDetectClickOutside({onTriggered: (e) => {
        const sibling = listWrapperRef.current.previousElementSibling
        const parent = listWrapperRef.current.parentNode
        let listHeight = listRef.current.getBoundingClientRect().height
        let listWrapperHeight = listWrapperRef.current.getBoundingClientRect().height       
        if(listWrapperHeight === 0 && (e.target === sibling || e.target === parent)) {
            listWrapperRef.current.style.height = listHeight + 'px'
        }else {
            listWrapperRef.current.style.height = 0;
        }
    }})
    return (
        <div className={drop__wrapper} ref={listWrapperRef}>
        <ul className={drop__list} ref={listRef}>
           {children}
        </ul>
    </div>
    )
}

export default DropdownMenu
