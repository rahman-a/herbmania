import React, {useRef} from 'react'
import {cards, cards__wrapper} from './Cards.module.scss'
import Card from '../ProductMiniCard/ProductMiniCard'

const Cards = () => {
    const all_card = [
        {
            id:0,
            title:'Lorem Ipsum 0',
            description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Magnam nesciunt totam vel impedit possimus inventore aut`,
            image:'/img/slide-1.png'
        },
        {
            id:1,
            title:'Lorem Ipsum 1',
            description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Magnam nesciunt totam vel impedit possimus inventore aut`,
            image:'/img/slide-3.png'
        },
        {
            id:2,
            title:'Lorem Ipsum 2',
            description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Magnam nesciunt totam vel impedit possimus inventore aut`,
            image:'/img/slide-2.png'
        },
        {
            id:3,
            title:'Lorem Ipsum 3',
            description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Magnam nesciunt totam vel impedit possimus inventore aut`,
            image:'/img/slide-1.png'
        },
        {
            id:4,
            title:'Lorem Ipsum 4',
            description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Magnam nesciunt totam vel impedit possimus inventore aut`,
            image:'/img/slide-4.png'
        },
    ]
    const ref = useRef(null) 
    const dragHandler = e => {
    //    Dragging block to right and left
    }
    return (
        <div className={cards}>
            <div className="container">
                <div className={cards__wrapper}  onDrag={(e) => dragHandler(e)} ref={ref}>
                    {all_card.map(card => (
                        <Card key={card.id} 
                        title={card.title}
                        description={card.description} 
                        image={card.image}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards
