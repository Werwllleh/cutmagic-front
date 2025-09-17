import React from 'react';
import SvgIcon from "@/components/svg-icon";
import {normalizePhone} from "@/utils";
import {MAP_PLACE_LINK, PHONE, TELEGRAM_LINK, WHATSAPP_LINK} from "@/consts";

const DevNow = () => {
    return (
        <div className="dev-block">
            <div className="container">
                <div className="dev-block__wrap">
                    <div className="dev-block__info">
                        <h3>Мы открылись!</h3>
                        <h1>волшебные ножницы</h1>
                        <h2>Парикмахерская</h2>
                    </div>
                    {/*<span className="dev-block__alarm">Сайт в разработке</span>*/}
                    <div className="dev-block__contacts">
                        <p className="dev-block__contacts--text">Наши контакты</p>
                        <ul className="dev-block__contacts--list">
                            <li className="dev-block__contacts--item">
                                <a title="Позвонить"
                                   href={`tel:${normalizePhone(PHONE)}`}
                                >
                                    <SvgIcon name={'phone'}/>
                                </a>
                            </li>
                            <li className="dev-block__contacts--item">
                                <a title="Смотреть на карте"
                                   href={MAP_PLACE_LINK}
                                   target="_blank"
                                >
                                    <SvgIcon name={'map'}/>
                                </a>
                            </li>
                            <li className="dev-block__contacts--item">
                                <a title="Написать в whatsapp"
                                   href={WHATSAPP_LINK}
                                   target="_blank"
                                >
                                    <SvgIcon name={'whatsapp'}/>
                                </a>
                            </li>
                            <li className="dev-block__contacts--item">
                                <a title="Написать в telegram"
                                   href={TELEGRAM_LINK}
                                   target="_blank"
                                >
                                    <SvgIcon name={'telegram'}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevNow;
