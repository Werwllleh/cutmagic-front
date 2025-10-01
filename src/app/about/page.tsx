import React from 'react';
import type {Metadata} from "next";
import PageInDev from "@/components/page-in-dev";

export const metadata: Metadata = {
  title: "О нас | Парикмахерская Волшебные Ножницы",
  description: "",
  keywords: "парикмахерская, стрижка, окрашивание, укладка, мужские стрижки, женские стрижки, детский парикмахер, барбер, красота, прическа, волосы, парикмахерские услуги, салон красоты, мастер парикмахер",
};

const Page = () => {
    return (
      <PageInDev />
    );
};

export default Page;
