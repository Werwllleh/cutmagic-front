"use client"
import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import {Swiper as SwiperClass} from 'swiper/types';
import SvgIcon from "@/components/svg-icon";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ButtonRecord from "@/components/button-record";

const MainBanner = () => {

    const swiperRef = useRef<SwiperClass>(null);


    return (
        <>
            <div className="main-banner">
                <div className="main-banner__body">
                    <div className="main-banner__swiper">
                        <Swiper
                            loop={true}
                            speed={700}
                            autoplay={{
                                pauseOnMouseEnter: true,
                                delay: 5000
                            }}
                            modules={[Navigation, Pagination, Autoplay]}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            pagination={{clickable: true}}
                        >
                            <SwiperSlide>
                                <div className="main-banner__slide">
                                    <div className="container">
                                        <div className="main-banner__slide--grid">
                                            <div className="main-banner__slide--info">
                                                <div className="main-banner__slide--text">
                                                    <h3>
                                                        Хорошие волосы — это не случайность. Это уход, внимание и мастерство.
                                                    </h3>
                                                    <p>
                                                        Здесь не делают «на скорую руку» и не предлагают шаблонные решения. Только бережная работа с вашим образом — чтобы вы чувствовали себя естественно, уверенно и безупречно. Запишитесь — начните свою историю красоты с правильного шага.
                                                    </p>
                                                    <ButtonRecord cls="main-banner__slide--action" text={'Записаться'}  />
                                                </div>
                                                <div className="main-banner__nav">
                                                    <div className="main-banner__nav--body">
                                                        <button className="main-banner__nav--btn prev"
                                                                onClick={() => swiperRef.current?.slidePrev()}>
                                                            <SvgIcon name={'arrow-s'}/>
                                                        </button>
                                                        <button className="main-banner__nav--btn next"
                                                                onClick={() => swiperRef.current?.slideNext()}>
                                                            <SvgIcon name={'arrow-s'}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="main-banner__slide--images">
                                                <img data-image={'primary'} src="/images/main-banner/1.webp" alt=""/>
                                                <img data-image={'secondary'} src="/images/main-banner/1-1.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="main-banner__slide">
                                    <div className="container">
                                        <div className="main-banner__slide--grid">
                                            <div className="main-banner__slide--info">
                                                <div className="main-banner__slide--text">
                                                    <h3>
                                                        Мужские стрижки от 300₽ — просто, стильно, по-настоящему!
                                                    </h3>
                                                    <p>
                                                        Здесь не делают “как у всех”. Только индивидуальный подход, чистые линии и внимание к деталям. Ты заслуживаешь больше, чем просто “подравнять”. Записывайся — почувствуй разницу.
                                                    </p>
                                                    <ButtonRecord cls="main-banner__slide--action" text={'Записаться'}  />
                                                </div>
                                                <div className="main-banner__nav">
                                                    <div className="main-banner__nav--body">
                                                        <button className="main-banner__nav--btn prev"
                                                                onClick={() => swiperRef.current?.slidePrev()}>
                                                            <SvgIcon name={'arrow-s'}/>
                                                        </button>
                                                        <button className="main-banner__nav--btn next"
                                                                onClick={() => swiperRef.current?.slideNext()}>
                                                            <SvgIcon name={'arrow-s'}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="main-banner__slide--images">
                                                <img data-image={'primary'} src="/images/main-banner/2.webp" alt=""/>
                                                <img data-image={'secondary'} src="/images/main-banner/2-1.webp" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainBanner;
