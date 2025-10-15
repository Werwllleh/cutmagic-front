import type {Metadata} from "next";
import React from "react";
import IndexPage from "@/components/pages/index-page";

export const metadata: Metadata = {
  title: "Парикмахерская в Чебоксарах — «Волшебные Ножницы»",
  description: "Профессиональная парикмахерская в Чебоксарах. Стрижки, окрашивание, укладки. Запишитесь по телефону! Работаем для мужчин, женщин и детей.",
  keywords: "парикмахерская, стрижка, окрашивание, укладка, мужские стрижки, женские стрижки, детский парикмахер, барбер, красота, прическа, волосы, парикмахерские услуги, салон красоты, мастер парикмахер, Чебоксары",
  alternates: {
    canonical: "https://cutmagic.ru/",
  },
};

export default function Home() {
  return <IndexPage/>;
}
