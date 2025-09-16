"use client";

import {
  YMap,
  YMapLocationRequest,
} from "@yandex/ymaps3-types/imperative/YMap";
import React, {useRef} from "react";
import {useMap} from "@/providers/map-provider";
import Loader from "@/components/loader";
import SvgIcon from "@/components/svg-icon";


interface MapLocationProps {
  // location: YMapLocationRequest;
  location: {
    center: number[],
    zoom: number
  }
}


const Map = ({location}: MapLocationProps) => {

  const mapRef = useRef<(YMap & { container: HTMLElement }) | null>(null);

  const {reactifyApi} = useMap();

  if (!reactifyApi) return <Loader />;

  const {
    YMap,
    YMapMarker,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
  } = reactifyApi;


  return (
    <YMap location={location} ref={mapRef}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapMarker
        zIndex={1}
        coordinates={location.center as [number, number]}
      >
        <span className="map-marker">
          <img alt="img" className="map-marker__icon" src="/placemark.svg"/>
        </span>
      </YMapMarker>
    </YMap>
  );
};

export default Map;