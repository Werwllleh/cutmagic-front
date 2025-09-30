import React from 'react';
import services from "../../../../data/services.json";
import ServiceCategory from "@/components/pages/service-category";

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
      <ServiceCategory services={filteredServices} />
    </div>
  );
};

export default Page;