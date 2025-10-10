import React from 'react';
import type {Metadata} from "next";
import AboutPage from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "О нас | Парикмахерская Волшебные Ножницы в Чебоксарах",
  description: "",
  keywords: "парикмахерская, стрижка, окрашивание, укладка, мужские стрижки, женские стрижки, детский парикмахер, барбер, красота, прическа, волосы, парикмахерские услуги, салон красоты, мастер парикмахер, Чебоксары",
  alternates: {
    canonical: "https://cutmagic.ru/about",
  },
};

const Page = () => {
  return (
    <div className="page page-about">
      <AboutPage/>
    </div>
  );
};

export default Page;
