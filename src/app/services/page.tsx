import React from 'react';
import type {Metadata} from "next";
import ServicesCategoriesPage from "@/components/pages/services-categories-page";

export const metadata: Metadata = {
  title: "Услуги | Парикмахерская Волшебные Ножницы в Чебоксарах",
  description: "Полный перечень услуг парикмахерской «Волшебные Ножницы»: стрижки для мужчин, женщин и детей, окрашивание, мелирование, балаяж, укладки, прически, коррекция бороды и усов. Работаем с проверенными профессиональными средствами и индивидуальным подходом к каждому клиенту.",
  keywords: "парикмахерская, стрижка, окрашивание, укладка, мужские стрижки, женские стрижки, детский парикмахер, барбер, красота, прическа, волосы, парикмахерские услуги, салон красоты, мастер парикмахер, Чебоксары",
  alternates: {
    canonical: "https://cutmagic.ru/services",
  },
};

const Page = () => {

  return (
    <div className="page">
      <ServicesCategoriesPage/>
    </div>
  )
    ;
};

export default Page;
