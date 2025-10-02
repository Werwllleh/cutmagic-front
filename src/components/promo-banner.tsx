"use client"

import React, {useEffect, useState} from 'react';
import ButtonRecord from "@/components/button-record";
import toast from "react-hot-toast";

const PromoBanner = () => {

  const [isToastActive, setIsToastActive] = useState(false);

  const notify = () => {

    if (isToastActive) return;

    toast(<div>Распространяется на услуги мужских, женских и&nbsp;детских стрижек. На услуги укладки, окрашивания и&nbsp;химии скидка&nbsp;5%</div>, {
      duration: 6000,
      position: 'bottom-center',
      style: {
        fontSize: '1.4rem',
        color: '#444',
        lineHeight: 1.5,
      },
    })

    setIsToastActive(true);

  };

  useEffect(() => {
    setTimeout(() => {
      setIsToastActive(false);
    }, 6200);
  }, [isToastActive]);

  return (
    <div className="promo-banner">
      <div className="promo-banner__body">
        <div className="promo-banner__info">
          <p>Назови промокод <span className="promo-banner__info--promocode">Кудряшка</span> и&nbsp;получи скидку&nbsp;<span
            className="promo-banner__note" onClick={notify}>!</span></p>
        </div>
        <span className="promo-banner__description">Акция действует ежедневно!</span>
        <div className="promo-banner__value">
          10%
        </div>
        <div className="promo-banner__button-record">
          <ButtonRecord text={'Записаться сейчас!'}/>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
