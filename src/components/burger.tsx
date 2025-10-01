"use client"
import React, {RefObject, useEffect, useState} from 'react';
import {MENU} from "@/consts";
import Link from "next/link";
import {usePathname} from "next/navigation";
import ButtonRecord from "@/components/button-record";

interface burgerProps {
  headerRef: RefObject<HTMLDivElement | null>;
}

const Burger = ({headerRef}: burgerProps) => {

  const pathname = usePathname();

  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);


  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [headerRef]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuIsActive) {
        setMobileMenuIsActive(false);
      }

      if (mobileMenuIsActive) {
        if (headerRef.current) {
          setHeaderHeight(headerRef.current.clientHeight);
        }
      }

    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuIsActive]);

  const toggleMenuHandler = () => {

    if (!mobileMenuIsActive) {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.clientHeight);
      }
    }

    setMobileMenuIsActive(!mobileMenuIsActive);
  }

  return (
    <>
      <button
        className={`burger ${mobileMenuIsActive ? 'active' : ''}`}
        onClick={toggleMenuHandler}
      >
        <label className="burger__wrapper">
          <span className="hamburger"></span>
        </label>
      </button>
      <div style={{ maxHeight: `calc(100vh - ${headerHeight}px)` }} className={`mobile-menu ${mobileMenuIsActive ? 'active' : ''}`}>
        <div className="mobile-menu__body">
          <nav className="mobile-menu__nav">
            {MENU.length && (
              <ul className="mobile-menu__list">
                {MENU.map(item => {
                  return (
                    <li key={item.PATH} className="mobile-menu__list--item">
                      <Link
                        onClick={() => setMobileMenuIsActive(false)}
                        href={item.PATH}
                        className={`mobile-menu__list--link ${pathname.includes(item.PATH) ? 'active' : ''}`}
                      >
                        {item.TEXT}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </nav>
          <div className="mobile-menu__record-button">
            <ButtonRecord text={'Записаться'} func={() => setMobileMenuIsActive(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger;
