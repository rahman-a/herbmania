import React from 'react'
import {
    carousel, 
    carousel__image,
    carousel__btn,
    carousel__btn_next,
    carousel__btn_prev,
    carousel__dots,
    carousel__action,
    carousel__desc,
    carousel__header,
    carousel__par,
    carousel__cta,
    carousel__cta_btn
} from './Carousel.module.scss'
import {
    CarouselProvider, 
    Slider, 
    Slide, 
    ButtonBack, 
    ButtonNext,
    DotGroup
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = () => {
    const all_sliders = [
        {
            id:0,
            title:'Decoration like never before',
            subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic eum aliquam at laudantium autem deserunt ',
            image:'/img/slide (4).jpg',
            isDescriptionOn:true,
        },
        {
            id:1,
            title:'Feel the Power',
            subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic eum aliquam at laudantium autem deserunt ',
            image:'/img/slide (2).jpg',
            isDescriptionOn:false,
        },
        {
            id:2,
            title:'First class Juangi Seed',
            subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic eum aliquam at laudantium autem deserunt ',
            image:'/img/slide (3).jpg',
            isDescriptionOn:true,
        },
        {
            id:3,
            title:'Herbs for Healthy Life',
            subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic eum aliquam at laudantium autem deserunt ',
            image:'/img/slide (1).jpg',
            isDescriptionOn:false,
        },
        {
            id:4,
            title:'Herbs for Healthy Life',
            subtitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic eum aliquam at laudantium autem deserunt ',
            image:'/img/slide (2).jpg',
            isDescriptionOn:false,
        },

    ]
    return (
        <div className={carousel}>
            <CarouselProvider 
                naturalSlideHeight={100}
                naturalSlideWidth={10}
                totalSlides={all_sliders.length}
                orientation='horizontal'
                isPlaying={true}
            >
                <Slider>
                    {all_sliders.map(slide => (
                        <Slide index={slide.id} style={{paddingBottom:'calc(100vh - 15rem)'}} key={slide.id}> 
                        {/* eslint-disable-next-line  */}
                        <a href="#">
                            <img src={slide.image} alt="placeholder"  className={carousel__image}/>
                        </a>
                        {slide.isDescriptionOn && 
                        (<>
                        <div className={carousel__action}>
                            
                            <div className={carousel__desc} >
                                <h1 className={carousel__header}>{slide.title}</h1>
                                <p className={carousel__par}>{slide.subtitle}</p>
                            </div>
                            <div className={carousel__cta}>
                                <button className={carousel__cta_btn}>Shop now</button>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        </>)}
                    </Slide>
                    ))}
                </Slider>
                <ButtonNext className={`${carousel__btn} ${carousel__btn_next}`}>
                    <i className="fas fa-arrow-alt-circle-up"></i>
                </ButtonNext>
                <ButtonBack className={`${carousel__btn} ${carousel__btn_prev}`}>
                    <i className="fas fa-arrow-alt-circle-down"></i>
                </ButtonBack>
                <DotGroup className={carousel__dots} />
            </CarouselProvider>
        </div>
    )
}

export default Carousel