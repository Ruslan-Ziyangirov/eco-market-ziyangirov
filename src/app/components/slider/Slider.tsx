// Import Swiper React components
import SwiperCore, { Navigation } from 'swiper';

import {Swiper, SwiperSlide } from 'swiper/react';
import "./Slider.sass"

// Import Swiper styles
import 'swiper/css';

SwiperCore.use([Navigation]);

export const Slider = () => {
    return (
        <Swiper
            navigation
            pagination
            speed={500}
            spaceBetween={300}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="background-first">

                    <div className="slaid-information">
                        <h2>Сделаем мир чище</h2>
                        <p>
                            Сдай макулатуру или старую одежду и получи скидку<br/>
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
                            Что среднее время разложения пластмассовых изделий колеблется<br/>
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
                            Медицинские маски не обязательно должны становиться отходами.<br/>
                            Их тоже можно сдать на переработку.
                        </p>
                        <button className="btn-slide">Пункты сбора масок</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    )
}

