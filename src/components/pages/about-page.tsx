"use client";
import React from 'react';
import ButtonRecord from "@/components/button-record";
import {normalizePhone} from "@/utils";
import {ADDRESS, MAP_PLACE_COMPANY, PHONE} from "@/consts";
import CustomMap from "@/components/custom-map";
import {MapProvider} from "@/providers/map-provider";
import PromoBanner from "@/components/promo-banner";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__body">
          <div className="about__main">
            <div className="about__main--title">
              <h1 className="about__title h3">О нас</h1>
            </div>
            <div className="about__main--address">
              <div className="about__address">
                <h5>Адрес</h5>
                <div className="about__address--values">
                  <div className="about__address--value">
                    <a href={MAP_PLACE_COMPANY} dangerouslySetInnerHTML={{__html: ADDRESS}} />
                    <span>Вход со стороны заднего фасада</span>
                  </div>
                  <div className="about__address--value">
                    <span>Телефон</span>
                    <a href={`tel:${normalizePhone(PHONE)}`}>{PHONE}</a>
                  </div>
                </div>
                <ButtonRecord text={"Записаться онлайн"} cls={"about__address--record-button"} />
              </div>
            </div>
            <div className="about__main--description">
              <div className="about__description">
                <p>
                  Парикмахерская <span>&laquo;Волшебные Ножницы&raquo;</span> в&nbsp;Чебоксарах&nbsp;&mdash; это
                  место, где оживают образы и&nbsp;рождаются улыбки.
                  Наши мастера создают яркие цвета, воздушные локоны и&nbsp;безупречные
                  стрижки&nbsp;&mdash; с&nbsp;любовью, профессионализмом и&nbsp;вниманием к&nbsp;каждой
                  детали.
                  <br/>
                  Салон, где&nbsp;дружная команда парикмахеров встречает каждого гостя с&nbsp;теплом,
                  выслушивает пожелания и&nbsp;находит идеальное решение именно для вас.
                  <br/>
                  Приходите
                  в&nbsp;парикмахерскую <span>&laquo;Волшебные Ножницы&raquo;</span>&nbsp;&mdash; и&nbsp;убедитесь,
                  почему нас выбирают жители Чебоксар и&nbsp;гости города. Вы&nbsp;выйдете отсюда
                  не&nbsp;только красивее, но&nbsp;и&nbsp;увереннее, светлее и&nbsp;с&nbsp;отличным
                  настроением!
                </p>
              </div>
            </div>
            <div className="about__main--video">
              <video poster={"/images/main-banner/poster.webp"} autoPlay playsInline loop muted>
                <source src="/video/salon.webm" type="video/webm"/>
                {/*<source src="flower.mp4" type="video/mp4"/>*/}
                Ваш браузер не поддерживает встроенные видео :(
              </video>
            </div>
          </div>
          <div className="about__map">
            <MapProvider>
              <CustomMap />
            </MapProvider>
          </div>
          <div className="about__banner">
            <PromoBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
