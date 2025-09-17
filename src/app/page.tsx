import type {Metadata} from "next";
import Contacts from "@/components/blocks/contacts";
import SvgIcon from "@/components/svg-icon";
import React from "react";
import DevNow from "@/components/blocks/dev-now";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Парикмахерская Волшебные Ножницы",
  description: "Волшебные Ножницы - парикмахерская премиум-класса. Профессиональные стрижки, модное окрашивание, укладки любой сложности. Используем только качественные материалы и современное оборудование",
  keywords: "парикмахерская, стрижка, окрашивание, укладка, мужские стрижки, женские стрижки, детский парикмахер, барбер, красота, прическа, волосы, парикмахерские услуги, салон красоты, мастер парикмахер",
};

export default function Home() {
  return (
    <div className="page main">
      <DevNow />
    </div>
  );
}
