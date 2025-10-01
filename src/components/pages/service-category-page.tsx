"use client";

import React from 'react';
import servicesData from "../../../data/services.json";
import ServicesSidebar from "@/components/services-sidebar";
import PromoBanner from "@/components/promo-banner";

interface IServices {
  category: string;
  items: IServiceItem[];
  key: string;
}

interface IServiceItem {
  id: number;
  name: string;
  price: number;
}

const ServiceCategoryPage = ({services}: { services: IServices }) => {

  const notes = servicesData.notes;
  const metadata = servicesData.services_metadata;

  const seo_text = metadata.find(service => service.key === services.key)?.seo_text;

  return (
    <div className="service-category">
      <div className="container">
        <h1 className="service-category__title h3">{services.category}</h1>
        <div className="service-category__grid">
          <div className="service-category__sidebar">
            <ServicesSidebar/>
          </div>
          <div className="service-category__content">
            {services.items.length ? (
              <div className="service-category__content--grid">
                <div className="service-category__table">
                  <table>
                    <thead>
                    <tr>
                      <th>Услуга</th>
                      <th>Стоимость</th>
                    </tr>
                    </thead>
                    <tbody>
                    {services.items.map((service) => {
                      return (
                        <tr key={service.id}>
                          <td>{service.name}</td>
                          <td>{service.price} ₽</td>
                        </tr>
                      )
                    })}
                    </tbody>
                  </table>
                </div>
                {services.key !== 'men' && services.key !== 'kids' ? (
                  <div className="service-category__notes">
                    <h6>Примечание:</h6>
                    <ul>
                      {Object.entries(notes).map(note => {
                        return (
                          <li key={note[0]}>
                            <p>{note[0]}</p>
                            <span> — </span>
                            <p>{note[1]}</p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ) : null}
                {seo_text ? (
                  <p className="service-category__seo-text">{seo_text}</p>
                ) : null}
                <div className="service-category__promo-banner">
                  <PromoBanner />
                </div>
              </div>
            ) : null}
          </div>

        </div>
      </div>
    </div>

  );
};

export default ServiceCategoryPage;
