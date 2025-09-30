"use client"
import React from 'react';
import SvgIcon from "@/components/svg-icon";
import Link from "next/link";

const ServicesCategoriesPage = () => {
  return (
    <div className="services categories">
      <div className="container">
        <div className="services__body">
          <h1 className="services__title h3">Услуги нашего салона</h1>
          <ul className="services__categories">
            <li className="services__category men">
              <div className="services__category--body">
                <p className="services__category--text">
                  Мужские стрижки
                </p>
              </div>
              <span className="arrow">
                <SvgIcon name={'arrow-right'}/>
              </span>
              <Link className="services__category--link" href={"/services/men"} />
            </li>
            <li className="services__category women">
              <div className="services__category--body">
                <p className="services__category--text">
                  Женские стрижки
                </p>
              </div>
              <span className="arrow">
                <SvgIcon name={'arrow-right'}/>
              </span>
              <Link className="services__category--link" href={"/services/women"} />
            </li>
            <li className="services__category coloring">
              <div className="services__category--body">
                <p className="services__category--text">
                  Окрашивание
                </p>
              </div>
              <span className="arrow">
                <SvgIcon name={'arrow-right'}/>
              </span>
              <Link className="services__category--link" href={"/services/coloring"} />
            </li>
            <li className="services__category styling">
              <div className="services__category--body">
                <p className="services__category--text">
                  Укладка
                </p>
              </div>
              <span className="arrow">
                <SvgIcon name={'arrow-right'}/>
              </span>
              <Link className="services__category--link" href={"/services/styling"} />
            </li>
            <li className="services__category chemistry">
              <div className="services__category--body">
                <p className="services__category--text">
                  Химия
                </p>
              </div>
              <span className="arrow">
                <SvgIcon name={'arrow-right'}/>
              </span>
              <Link className="services__category--link" href={"/services/chemistry"} />
            </li>
            <li className="services__category kids">
              <div className="services__category--body">
                <p className="services__category--text">
                  Детская стрижка
                </p>
              </div>
              <span className="arrow">
                <SvgIcon name={'arrow-right'}/>
              </span>
              <Link className="services__category--link" href={"/services/kids"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategoriesPage;