"use client";
import React from 'react';
import ButtonRecord from "@/components/button-record";
import {normalizePhone} from "@/utils";
import {ADDRESS, MAP_PLACE_COMPANY, PHONE} from "@/consts";
import CustomMap from "@/components/custom-map";
import {MapProvider} from "@/providers/map-provider";
import PromoBanner from "@/components/promo-banner";
import servicesData from "../../../data/services.json";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";
import ServicesItems from "@/components/services-items";

const AboutPage = () => {

  const services = servicesData.detail_pages;


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
                  Добро пожаловать в&nbsp;парикмахерскую <b>&laquo;Волшебные Ножницы&raquo;</b>&nbsp;&mdash; уютное место в&nbsp;Чебоксарах, где вас встречают с&nbsp;улыбкой и&nbsp;делают всё, чтобы вы&nbsp;почувствовали себя прекрасно.
                </p>
                <p>
                  Мы&nbsp;верим, что красивая прическа&nbsp;&mdash; это не&nbsp;просто внешний образ, а&nbsp;способ подчеркнуть характер, настроение и&nbsp;внутреннюю гармонию. Наши мастера умеют слушать, чувствовать стиль и&nbsp;подбирать именно&nbsp;то, что подойдёт вам идеально.
                </p>
                <p>В&nbsp;нашем салоне вы&nbsp;можете:</p>
                <ul>
                  <li>обновить стрижку или кардинально изменить образ;</li>
                  <li>окрасить волосы в&nbsp;модные оттенки или вернуть им&nbsp;естественный блеск;</li>
                  <li>сделать уход, восстановление или укладку;</li>
                  <li>подготовиться к&nbsp;важному событию&nbsp;&mdash; будь&nbsp;то свадьба, выпускной или просто особенный день.</li>
                </ul>
                <p>
                  Мы&nbsp;используем только проверенные профессиональные средства и&nbsp;современные техники, чтобы ваши волосы были здоровыми и&nbsp;красивыми.
                </p>
                <p>
                  <b>&laquo;Волшебные Ножницы&raquo;</b>&nbsp;— это не&nbsp;просто парикмахерская в&nbsp;Чебоксарах. Это место, где&nbsp;вы&nbsp;отдыхаете, вдохновляетесь и&nbsp;уходите с&nbsp;отличным настроением.
                </p>
                <p>
                Приходите&nbsp;&mdash; и&nbsp;убедитесь сами, что чудеса бывают не&nbsp;только в&nbsp;сказках!
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
          {!!services.length && (
            <div className="about__services">
              <ServicesItems type="swiper" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
