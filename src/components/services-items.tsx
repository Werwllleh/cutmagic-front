import React from 'react';
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import servicesData from "../../data/services.json";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ServicesItemsProps {
  type: string;
}

const ServicesItems = ({type}:ServicesItemsProps) => {

  const services = servicesData.detail_pages;

  return (
    <div className="services-items">
      {type === 'swiper' && (
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={"auto"}
          // spaceBetween={20}
        >
          {services.map((service) => {
            return (
              <SwiperSlide key={service.key}>
                <div className="services-items--slide">
                  <div className="image">
                    <img src={`/images/services/${service.image}`} alt=""/>
                    <Link href={"/services" + service.link} />
                  </div>
                  <Link className="category" href={"/services" + service.link}>
                    {service.name}
                  </Link>
                  <Link href={"/services" + service.link} className="btn secondary large button">
                    Смотреть цены
                  </Link>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </div>
  );
};

export default ServicesItems;
