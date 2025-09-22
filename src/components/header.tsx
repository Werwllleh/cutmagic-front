'use client'

import React, {useEffect, useRef} from 'react';
import Link from "next/link";
import {MENU} from "@/consts";
import {usePathname} from "next/navigation";
import ButtonRecord from "@/components/button-record";

const Header = () => {

    const pathname = usePathname();
    const header = useRef<HTMLElement>(null);

    useEffect(() => {

        const headerElement = header.current;

        headerElement?.classList.remove('hide');

    }, [])

    return (
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
                        <ButtonRecord text={'Онлайн запись'}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
