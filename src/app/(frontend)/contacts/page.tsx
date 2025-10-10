import React from 'react';
import type {Metadata} from "next";
import PageInDev from "@/components/page-in-dev";

export const metadata: Metadata = {
  title: "Контакты | Парикмахерская Волшебные Ножницы в Чебоксарах",
  description: "",
  keywords: "парикмахерская, стрижка, окрашивание, укладка, мужские стрижки, женские стрижки, детский парикмахер, барбер, красота, прическа, волосы, парикмахерские услуги, салон красоты, мастер парикмахер, Чебоксары",
  alternates: {
    canonical: "https://cutmagic.ru/contacts",
  },
};

const Page = () => {
    return (
      <PageInDev/>
    );
};

export default Page;
