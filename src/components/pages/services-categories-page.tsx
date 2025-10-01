"use client";

import React from 'react';
import SvgIcon from "@/components/svg-icon";
import Link from "next/link";
import services from "../../../data/services.json";
import PromoBanner from "@/components/promo-banner";

const ServicesCategoriesPage = () => {
  return (
    <div className="services categories">
      <div className="container">
        <div className="services__body">
          <h1 className="services__title h3">Услуги нашего салона</h1>
          {services.detail_pages.length ? (
            <ul className="services__categories">
              {services.detail_pages.map((page) => (
                <li key={page.key} className={`services__category ${page.key}`}>
                  <div className="services__category--body">
                    <p className="services__category--text">
                      {page.name}
                    </p>
                  </div>
                  <span className="arrow">
                <SvgIcon name={'arrow-right'}/>
              </span>
                  <Link className="services__category--link" href={`/services${page.link}`}/>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="services__promo-banner">
            <PromoBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategoriesPage;
