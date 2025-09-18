'use client'

import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import Button from "@/components/button";
import {BUTTON_SIZE, BUTTON_TYPE, MENU, PHONE, TELEGRAM_LINK, WHATSAPP_LINK} from "@/consts";
import {usePathname} from "next/navigation";
import CustomModal from "@/components/custom-modal";
import {normalizePhone, ymReach} from "@/utils";
import SvgIcon from "@/components/svg-icon";

const Header = () => {

    const pathname = usePathname();
    const header = useRef<HTMLElement>(null);
    const [modalRecordIsOpen, setModalRecordIsOpen] = useState(false);

    useEffect(() => {

        const headerElement = header.current;

        headerElement?.classList.remove('hide');

    }, [])

    const openModalRecord = () => {
        ymReach('header-button')
        setModalRecordIsOpen(true)
    }

    return (
        <>
            <header ref={header} className="header hide">
                <div className="header__container container">
                    <div className="header__body">
                        <div className="header__grid">
                            <Link href="/" className="header__logo">
                                <img className="header__logo--img" src={'/images/logo-min.png'}
                                     alt="Логотип Волшебные ножницы"/>
                                <p className="header__logo--text">
                                    <span>Волшебные Ножницы</span>
                                    <span>Парикмахерская</span>
                                </p>
                            </Link>
                            <nav className="header__nav">
                                {MENU.length && (
                                    <ul className="header__nav--list">
                                        {MENU.map(item => {
                                            return (
                                                <li key={item.PATH} className="header__nav--item">
                                                    <Link
                                                        href={item.PATH}
                                                        className={`header__nav--link anim-underline ${pathname === item.PATH ? 'active' : ''}`}>
                                                        {item.TEXT}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
                            </nav>
                            <Button cls="header__button-record"
                                    type={BUTTON_TYPE.PRIMARY}
                                    size={BUTTON_SIZE.LARGE}
                                    onClick={openModalRecord}
                            >Онлайн запись
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <CustomModal isOpen={modalRecordIsOpen} onCancel={() => setModalRecordIsOpen(false)} >
                <div className="dev-block__contacts">
                    <p className="dev-block__contacts--text">Контакты для записи</p>
                    <ul className="dev-block__contacts--list">
                        <li className="dev-block__contacts--item">
                            <a title="Позвонить"
                               href={`tel:${normalizePhone(PHONE)}`}
                            >
                                <SvgIcon name={'phone'}/>
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
            </CustomModal>
        </>
    );
};

export default Header;
