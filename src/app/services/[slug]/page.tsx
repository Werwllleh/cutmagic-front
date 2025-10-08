import React from 'react';
import services from "../../../../data/services.json";
import ServiceCategoryPage from "@/components/pages/service-category-page";
import type {Metadata} from "next";

export async function generateMetadata({params,}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const {slug} = await params;

  const serviceCategory = services.services_metadata.find(cat => cat.key === slug);

  return {
    title: serviceCategory?.title || '',
    description: serviceCategory?.description || '',
    keywords: serviceCategory?.keywords || "парикмахерская, волшебные ножницы, стрижка, окрашивание, укладка, салон красоты, детские стрижки, Чебоксары",
    alternates: {
      canonical: `https://cutmagic.ru/services/${slug}`,
    },
  };
}

const Page = async ({params}: {
  params: Promise<{ slug: string }>
}) => {

  const {slug} = await params;

  if (!slug) return;

  const data = services;
  const filteredServices = data.services.find(cat => cat.key === slug);

  if (!filteredServices) return;

  return (
    <div className="page">
      <ServiceCategoryPage services={filteredServices}/>
    </div>
  );
};

export default Page;
