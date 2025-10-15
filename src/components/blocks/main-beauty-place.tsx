"use client"
import React from 'react';
import {useContent} from "@/hooks/useContent";
import ConverterRichText from "@/components/converter-rich-text";
import {Skeleton} from "antd";
import {BASE_URL} from "@/consts";

const MainBeautyPlace = () => {

  const {data, isLoading, isError} = useContent('globals', 'main-seo-block');

  return (
    <div className="main-beauty-place">
      <div className="container">
        <div className="main-beauty-place__grid">
          <div className="main-beauty-place__media">
            {isLoading && <Skeleton.Image active/>}
            {!isLoading && !isError && data?.image?.url && <img src={BASE_URL + data.image.url} alt=""/>}
          </div>
          <div className="main-beauty-place__info">
            {isLoading && <Skeleton active paragraph={{rows: 7}}/>}
            {!isLoading && !isError && <ConverterRichText data={data?.text}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBeautyPlace;
