import React from 'react'
import {
    graph,
    graph__wrapper,
    graph__leaf,
    graph__leaf_1,
    graph__leaf_2,
    graph__leaf_3,
    graph__leaf_4,
} from './CategoriesGraph.module.scss'

const CategoriesGraph = () => {
    return (
        <div className={graph}>
            <div className={graph__wrapper}>
                <div className={`${graph__leaf} ${graph__leaf_1}`}></div>
                <div className={`${graph__leaf} ${graph__leaf_2}`}></div>
                <div className={`${graph__leaf} ${graph__leaf_3}`}></div>
                <div className={`${graph__leaf} ${graph__leaf_4}`}></div>
            </div>
        </div>
    )
}

export default CategoriesGraph
