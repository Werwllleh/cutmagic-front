"use client"
import React from 'react';
import {Placemark, Map, YMaps, GeolocationControl, TypeSelector} from "@iminside/react-yandex-maps";
import {ADDRESS, MAP_PLACE, MAP_PLACE_LINK, PHONE} from "@/consts";
import ButtonRecord from "@/components/button-record";
import {normalizePhone} from "@/utils";

const MainMap = () => {


    return (
        <div className="main-map">
            <div className="container">
                <div className="main-map__grid">
                    <div className="main-map__info">
                        <h3 className="main-map__info--title h3">Как нас найти</h3>
                        <div className="main-map__info--values">
                            <div className="main-map__info--value">
                                <span>Адрес</span>
                                <a href={MAP_PLACE_LINK} target="_blank" dangerouslySetInnerHTML={{ __html: ADDRESS }} />
                            </div>
                            <div className="main-map__info--value">
                                <span>Телефон</span>
                                <a href={`tel:${normalizePhone(PHONE)}`}>{PHONE}</a>
                            </div>
                        </div>
                        <ButtonRecord text={'Записаться онлайн'} cls={"main-map__info--action"}/>
                    </div>
                    <div className="main-map__map">
                        <YMaps query={{
                            lang: 'ru_RU',
                            apikey: process.env.NEXT_PUBLIC_YKEY,
                            ns: "use-load-option",
                            load: "package.full"
                        }}>
                            <Map defaultState={{...MAP_PLACE, controls: []}} height={'100%'} width={'100%'}>
                                <Placemark geometry={MAP_PLACE.center} options={{
                                    iconImageSize: [10, 10],
                                    preset: "islands#orangeBarberIcon",
                                }} />
                                <TypeSelector />
                                <GeolocationControl options={{ float: "left" }} />
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMap;
