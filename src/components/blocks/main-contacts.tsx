import React from 'react';
import SvgIcon from "@/components/svg-icon";
import {ADDRESS, MAP_PLACE_LINK, PHONE} from "@/consts";
import {normalizePhone} from "@/utils";

const MainContacts = () => {
    return (
        <section className="main-contacts">
            <div className="main-contacts__container container">
                <ul className="main-contacts__list">
                    <li className="main-contacts__item phone">
                    <span className="main-contacts__item--icon">
                        <SvgIcon name={"phone2"}/>
                    </span>
                        <div className="main-contacts__item--info">
                            <p className="main-contacts__item--text">
                                {PHONE}
                            </p>
                            <p className="main-contacts__item--description">
                                Запись и информация
                            </p>
                        </div>
                        <a aria-label="парикмахерская телефон" href={`tel:${normalizePhone(PHONE)}`} className="main-contacts__item--link"/>
                    </li>
                    <li className="main-contacts__item location">
                    <span className="main-contacts__item--icon">
                        <SvgIcon name={"location"}/>
                    </span>
                        <div className="main-contacts__item--info">
                            <p className="main-contacts__item--text" dangerouslySetInnerHTML={{__html: ADDRESS}}/>
                            <p className="main-contacts__item--description">
                                Вход со стороны заднего фасада
                            </p>
                        </div>
                        <a href={MAP_PLACE_LINK} target={"_blank"} className="main-contacts__item--link"/>
                    </li>
                    <li className="main-contacts__item timing">
                    <span className="main-contacts__item--icon">
                        <SvgIcon name={"clock"}/>
                    </span>
                        <div className="main-contacts__item--info">
                            <p className="main-contacts__item--text">
                                9:00 - 19:00
                            </p>
                            <p className="main-contacts__item--description">
                                Ежедневно
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default MainContacts;
