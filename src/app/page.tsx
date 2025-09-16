import type {Metadata} from "next";
import Contacts from "@/components/blocks/contacts";
import SvgIcon from "@/components/svg-icon";
import React from "react";
import DevNow from "@/components/blocks/dev-now";

export const metadata: Metadata = {
  title: "Парикмахерская Волшебные Ножницы",
  description: "Описание",
};

export default function Home() {
  return (
    <div className="page main">
      <DevNow />
    </div>
  );
}
