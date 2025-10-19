"use client"
import React, {useEffect, useState} from 'react';
import CustomModal from "@/components/custom-modal";
import PromoBanner from "@/components/promo-banner";
import {useContent} from "@/hooks/useContent";
import dayjs from "dayjs";

export interface PromoBannerStatus {
  active: boolean;
  delay: number | null;
}

const PromoModal = () => {

  const {data: promoData, isLoading, isError} = useContent('globals', 'promo-modal');

  const [promoDataValues, setPromoDataValues] = useState<PromoBannerStatus>({
    active: false,
    delay: null,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [timeIsOver, setTimeIsOver] = useState(false);

  useEffect(() => {
    if (promoData && !isLoading && !isError) {
      setPromoDataValues({
        active: promoData.show,
        delay: promoData.delay,
      })
    }
  }, [promoData, isLoading, isError]);

  useEffect(() => {
    if (localStorage.getItem('close-promo-modal')) {

      const closeDate = JSON.parse(localStorage.getItem('close-promo-modal') as string);

      const diffInHours = dayjs().diff(dayjs(closeDate), 'hour');

      if (diffInHours >= 24) {
        setTimeIsOver(true);
      } else {
        setTimeIsOver(false);
      }

    } else {
      setTimeIsOver(true);
    }

    setTimeout(() => {
      if (promoDataValues.active && timeIsOver) {
        setIsOpen(true)
      }
    }, Number(promoDataValues.delay) !== 0 ? Number(promoDataValues.delay) : 0)
  }, [promoDataValues, timeIsOver]);

  const closePromoModal = () => {
    localStorage.setItem('close-promo-modal', JSON.stringify(dayjs()))
    setIsOpen(false)
  }

  return (
    <CustomModal isOpen={isOpen} onCancel={closePromoModal} className="promo-modal">
      <PromoBanner />
    </CustomModal>
  );
};

export default PromoModal;
