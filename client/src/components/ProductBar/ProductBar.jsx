import React from 'react'
import {
    bar__show,
    bar__sort,
    bar__view
} from './ProductBar.module.scss'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

const ProductBar = ({page, sort, view,setViewHandler, setSortHandler, setPageHandler }) => {
    return (
        <>
            <div className={bar__show}>
                SHOW: {page} PER PAGE &nbsp;
                <i className="fas fa-chevron-down"></i>
                <DropdownMenu top={4} left={-2}>
                    <li
                    value={10}
                    onClick={({target:{value}}) => setPageHandler(value)}
                    >10 PER PAGE</li>
                    <li
                    value={15}
                    onClick={({target:{value}}) => setPageHandler(value)}
                    >15 PER PAGE</li>
                    <li
                    value={20}
                    onClick={({target:{value}}) => setPageHandler(value)}
                    >20 PER PAGE</li>
                </DropdownMenu>
            </div>
            <div className={bar__sort}>
                SORT: {sort.toUpperCase()} &nbsp;
                <i className="fas fa-chevron-down"></i>
                <DropdownMenu top={4} left={-2}>
                    <li
                    onClick={() => setSortHandler('featured')}
                    >FEATURED</li>
                    <li
                    onClick={() => setSortHandler('recently added')}
                    >RECENTLY ADDED</li>
                    <li
                    onClick={() => setSortHandler('top rated')}
                    >TOP RATED</li>
                </DropdownMenu>
            </div>
            <div className={bar__view}>
                VIEW: {view.toUpperCase()} &nbsp;
                <i className="fas fa-chevron-down"></i>
                <DropdownMenu top={4} left={-2}>
                    <li
                        onClick={() => setViewHandler('horizontal')}
                    ><i className='fas fa-th'></i>HORIZONTAL</li>
                    <li
                    onClick={() => setViewHandler('vertical')}
                    >
                    <i className='fas fa-ellipsis-v'></i>
                    VERTICAL</li>
                </DropdownMenu>
            </div> 
        </>
    )
}

export default ProductBar
