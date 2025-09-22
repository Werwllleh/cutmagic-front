import type {Metadata} from "next";
import React from "react";
import MainContacts from "@/components/blocks/main-contacts";
import MainBanner from "@/components/blocks/main-banner";
import MainMap from "@/components/blocks/main-map";

export const metadata: Metadata = {
  title: "Парикмахерская Волшебные Ножницы",
  description: "Волшебные Ножницы - парикмахерская премиум-класса. Профессиональные стрижки, модное окрашивание, укладки любой сложности. Используем только качественные материалы и современное оборудование",
  keywords: "парикмахерская, стрижка, окрашивание, укладка, мужские стрижки, женские стрижки, детский парикмахер, барбер, красота, прическа, волосы, парикмахерские услуги, салон красоты, мастер парикмахер",
};

export default function Home() {
  return (
      <div className="page main">
          {/*<div className="main__opening-event">
              <div className="container">
                  <div className="main__opening-event--wrap">
                      <h3>Мы открылись!</h3>
                      <h1>волшебные ножницы</h1>
                      <h2>Парикмахерская</h2>
                  </div>
              </div>
          </div>*/}
          <div className="main__banner">
              <MainBanner />
          </div>
          <div className="main__contacts">
              <MainContacts/>
          </div>
          <div className="main__map">
              <MainMap />
          </div>
      </div>
  );
}
