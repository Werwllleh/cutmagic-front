"use client"

import React, {useEffect, useState} from 'react';
import ButtonRecord from "@/components/button-record";
import toast from "react-hot-toast";
import ConverterRichText from "@/components/converter-rich-text";
import {useContent} from "@/hooks/useContent";
import {PromoBannerStatus} from "@/components/promo-modal";

interface PromoDataValuesProps extends PromoBannerStatus{
  title: string;
  description: string | null;
  discount: number | null;
  disclaimer: string | null;
}


const PromoBanner = () => {

  const {data: promoBannerData, isLoading, isError} = useContent('globals', 'promo-modal');

  const [isToastActive, setIsToastActive] = useState(false);

  const notify = () => {

    if (isToastActive) return;

    toast(<div><ConverterRichText data={promoBannerData?.disclaimer}/></div>, {
      duration: 8000,
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
    }, 8200);
  }, [isToastActive]);

  return (
    promoBannerData && promoBannerData?.show && !isLoading && !isError && <div className="promo-banner">
      <div className="promo-banner__body">
        <div className="promo-banner__info">
          {promoBannerData?.title && <ConverterRichText data={promoBannerData?.title} />}
        </div>
        {promoBannerData?.description && (
          <span className="promo-banner__description">
            <ConverterRichText data={promoBannerData?.description}/>
          </span>
        )}
        {promoBannerData?.discount && (
          <div className="promo-banner__value">
            {promoBannerData.discount} %
          </div>
        )}
        <div className="promo-banner__button-record">
          <ButtonRecord text={'Записаться сейчас!'}/>
        </div>
        {promoBannerData?.disclaimer && <span className="promo-banner__note" onClick={notify}>!</span>}
      </div>
    </div>
  );
};

export default PromoBanner;
