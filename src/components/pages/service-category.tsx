"use client";

import React from 'react';
import servicesData from "../../../data/services.json";

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

const ServiceCategory = ({services}: { services: IServices }) => {

  const notes = servicesData.notes;

  return (
    <div className="service-category">
      <div className="container">
        <h1 className="service-category__title h3">{services.category}</h1>
        {services.items.length ? (
          <>
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
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceCategory;