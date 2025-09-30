import React from 'react';
import type {Metadata} from "next";
import ServicesCategoriesPage from "@/components/pages/services-categories-page";

export const metadata: Metadata = {
  title: "Услуги | Парикмахерская Волшебные Ножницы",
  description: "Волшебные Ножницы - парикмахерская премиум-класса. Профессиональные стрижки, модное окрашивание, укладки любой сложности. Используем только качественные материалы и современное оборудование",
  keywords: "парикмахерская, стрижка, окрашивание, укладка, мужские стрижки, женские стрижки, детский парикмахер, барбер, красота, прическа, волосы, парикмахерские услуги, салон красоты, мастер парикмахер",
};

const Page = () => {

  return (
    <div className="page">
      <ServicesCategoriesPage />
    </div>
  );
};

export default Page;
