"use client"
import React, {Dispatch, SetStateAction, useEffect} from 'react';

interface burgerProps {
  mobileMenuIsActive: boolean;
  setMobileMenuIsActive: Dispatch<SetStateAction<boolean>>;
}

const Burger = ({mobileMenuIsActive, setMobileMenuIsActive}: burgerProps) => {

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuIsActive) {
        setMobileMenuIsActive(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuIsActive]);

  const toggleMenuHandler = () => {
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

    </>
  );
};

export default Burger;
