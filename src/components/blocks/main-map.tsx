"use client"
import React from 'react';
import {ADDRESS, MAP_KEY, MAP_PLACE_LINK, PHONE} from "@/consts";
import ButtonRecord from "@/components/button-record";
import {normalizePhone} from "@/utils";
import {MapProvider} from "@/providers/map-provider";

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
                        {/*<div ref={mapRef} style={{width: "100%", height: "100%"}}/>*/}
                        <div style={{width: '600px', height: '400px'}}>
                            <MapProvider apiUrl={MAP_KEY}>
                                <Map places={[]} />
                            </MapProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMap;
