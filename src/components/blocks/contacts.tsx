'use client';
import React from 'react';
import {INSTAGRAM, MAP_PLACE, PHONE, VK} from "@/app/(frontend)/consts";
import {normalizePhone} from "@/app/(frontend)/utils";
import {MapProvider} from "@/providers/map-provider";
import CustomMap from "@/components/custom-map";


const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts__container container">
        <div className="contacts__wrap">
          <div className="contacts__information">
            <h2 className="contacts__title h2">контакты</h2>
            <address className="contacts__address">
              <a className="contacts__address--address" href="https://yandex.ru/maps/-/CLawv0my" target="_blank">Чебоксары,
                улица Академика В.Н.Челомея, 12</a>
              <a className="contacts__address--phone" href={`tel:${normalizePhone(PHONE)}`}>{PHONE}</a>
            </address>
            {/*<ul className="contacts__links">
              <li className="contacts__links--item">
                <a href={VK}>
                  <SvgIcon name={'vk'}/>
                </a>
              </li>
              <li className="contacts__links--item">
                <a href={INSTAGRAM}>
                  <SvgIcon name={'instagram'}/>
                </a>
              </li>
            </ul>*/}
          </div>
          <div className="contacts__map">
            <MapProvider>
              <CustomMap />
            </MapProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
