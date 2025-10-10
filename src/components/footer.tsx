import React from 'react';
import dayjs from "dayjs";
import {normalizePhone} from "@/app/(frontend)/utils";
import {PHONE} from "@/app/(frontend)/consts";
import SvgIcon from "@/components/svg-icon";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__body">
                    <div className="footer__logo"></div>
                    <div className="footer__nav"></div>
                    <div className="footer__info">
                        <div className="footer__info--value">
                            <a aria-label="парикмахерская телефон" href={`tel:${normalizePhone(PHONE)}`}>
                                <SvgIcon name={"phone2"}/>
                                {PHONE}
                            </a>
                        </div>
                        <div className="footer__info--value">
                            <span>
                                <SvgIcon name={"clock"}/>
                                9:00 - 19:00
                            </span>
                        </div>
                    </div>
                    {/*<div className="footer__row">
            <span className="footer__row--text">© Волшебные Ножницы</span>
            <span className="footer__row--year">{dayjs().year()}</span>
          </div>*/}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
