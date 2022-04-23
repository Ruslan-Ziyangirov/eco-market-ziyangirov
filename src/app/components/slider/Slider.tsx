// Import Swiper React components
import SwiperCore, { Navigation } from 'swiper';

import {Swiper, SwiperSlide } from 'swiper/react';
import "./Slider.sass"


// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import {FC} from "react";

interface Props{
    name:string,
    height: number|string;
    width:number|string;
}


export const Icon: FC<Props> = ({ name, height,width}) => {
    return (
        <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            <use xlinkHref={`/sprite.svg#${name}`}></use>
        </svg>
    );
}



SwiperCore.use([Navigation]);

export const Slider = () => {
    return (
        <div className="slider">
            <div className="swiper-button-prev-new">
                <Icon name="left-arrow-swiper" height={24} width={24}/>
            </div>
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next-new',
                    prevEl: '.swiper-button-prev-new'
                }
                }
                loop={true}
                pagination
                autoplay={true}
                speed={500}
                spaceBetween={200}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="background-first">

                        <div className="slaid-information">
                            <h2>Сделаем мир чище</h2>
                            <p>
                                Сдай макулатуру или старую одежду и получи скидку
                                на покупку товаров из переработанных материалов
                            </p>
                            <button className="btn-slide">Условия сервиса</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="background-second">
                        <div className="slaid-information">
                            <h2>А вы знали...</h2>
                            <p>
                                Что среднее время разложения пластмассовых изделий колеблется
                                от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет?
                            </p>
                            <button className="btn-slide">Узнать больше</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="background-third">
                        <div className="slaid-information">
                            <h2>Что с масками?</h2>
                            <p>
                                Медицинские маски не обязательно должны становиться отходами.
                                Их тоже можно сдать на переработку.
                            </p>
                            <button className="btn-slide">Пункты сбора масок</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next-new">
                <Icon name="right-arrow-swiper" height={24} width={24}/>
            </div>
        </div>
    )
}

