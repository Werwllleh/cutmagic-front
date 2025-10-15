"use client"
import React from 'react';
import MainBanner from "@/components/blocks/main-banner";
import PromoBanner from "@/components/promo-banner";
import MainContacts from "@/components/blocks/main-contacts";
import MainBeautyPlace from "@/components/blocks/main-beauty-place";
import MainMap from "@/components/blocks/main-map";
import {useContent} from "@/hooks/useContent";

const IndexPage = () => {

  const {data: mainSeoBlockData, isLoading, isError} = useContent('globals', 'main-seo-block');

  return (
    <div className="page main">
      <div className="main__banner">
        <MainBanner/>
      </div>
      <div className="main__promo">
        <div className="container">
          <PromoBanner/>
        </div>
      </div>
      <div className="main__contacts">
        <MainContacts/>
      </div>
      {mainSeoBlockData?.show && (
        <div className="main__beauty-place">
          <MainBeautyPlace/>
        </div>
      )}
      <div className="main__map">
        <MainMap/>
      </div>
    </div>
  );
};

export default IndexPage;
