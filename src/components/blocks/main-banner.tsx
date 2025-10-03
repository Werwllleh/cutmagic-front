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
import Link from "next/link";
import {BUTTON_SIZE, BUTTON_TYPE, MENU} from "@/consts";

const MainBanner = () => {

  const swiperRef = useRef<SwiperClass>(null);

  const aboutItem = MENU.find(item => item.TEXT.toLowerCase() === 'о нас');

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
                          <h1 className="h3">
                            Парикмахерская <br/><span>«Волшебные Ножницы»</span> в&nbsp;Чебоксарах
                          </h1>
                          <p>
                            Мы рады открыть двери парикмахерской «Волшебные Ножницы» в Чебоксарах!
                            Вас ждут: уютная атмосфера, внимательные мастера и только проверенные профессиональные
                            средства.
                            <br/>
                            Ждём вас — ваша история красоты начинается здесь!
                          </p>
                          <ButtonRecord cls="main-banner__slide--action" text="Записаться"/>
                          {/*{aboutItem?.PATH ? (
                            <Link href={aboutItem.PATH}
                                  className={`btn ${BUTTON_TYPE.PRIMARY} ${BUTTON_SIZE.LARGE} main-banner__slide--action`}
                            >О нас</Link>
                          ) : <ButtonRecord cls="main-banner__slide--action" text="Записаться"/>}*/}
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
                      <div className="main-banner__slide--media">
                        <video poster={"/images/main-banner/poster.webp"} data-video={'primary'} autoPlay playsInline loop muted>
                          <source src="/video/salon.webm" type="video/webm"/>
                          {/*<source src="flower.mp4" type="video/mp4"/>*/}
                          Ваш браузер не поддерживает встроенные видео :(
                        </video>
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
                          <h2 className="h3">
                            Хорошие волосы — это не случайность. Это уход, внимание и мастерство.
                          </h2>
                          <p>
                            Здесь не делают «на скорую руку» и не предлагают шаблонные решения. Только бережная работа с
                            вашим образом — чтобы вы чувствовали себя естественно, уверенно и безупречно. Запишитесь —
                            начните свою историю красоты с правильного шага.
                          </p>
                          <ButtonRecord cls="main-banner__slide--action" text={'Записаться'}/>
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
                      <div className="main-banner__slide--media">
                        <img data-image={'primary'} src="/images/main-banner/2.webp" alt=""/>
                        <img data-image={'secondary'} src="/images/main-banner/2-1.webp" alt=""/>
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
                          <h2 className="h3">
                            Мужские стрижки от 300₽ — просто, стильно, по-настоящему!
                          </h2>
                          <p>
                            Здесь не делают “как у всех”. Только индивидуальный подход, чистые линии и внимание к
                            деталям. Ты заслуживаешь больше, чем просто “подравнять”. Записывайся — почувствуй разницу.
                          </p>
                          <ButtonRecord cls="main-banner__slide--action" text={'Записаться'}/>
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
                      <div className="main-banner__slide--media">
                        <img data-image={'primary'} src="/images/main-banner/3.webp" alt=""/>
                        <img data-image={'secondary'} src="/images/main-banner/3-1.webp" alt=""/>
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
