"use client";

import {MAP_PLACE, MAP_PLACE_COMPANY, MAP_PLACE_MARKER, MAP_PLACE_ROUTE} from "@/app/(frontend)/consts";
import {YMap} from "@yandex/ymaps3-types/imperative/YMap";
import {useRef} from "react";
import {useMap} from "@/providers/map-provider";
import Link from "next/link";
import Loader from "@/components/loader";


const CustomMap = () => {

  const mapRef = useRef<(YMap & { container: HTMLElement }) | null>(null);

  const {reactifyApi} = useMap();

  if (!reactifyApi) return <Loader/>;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
  } = reactifyApi;

  return (
    <YMap className="custom-map" location={MAP_PLACE} ref={mapRef}>
      <YMapDefaultSchemeLayer/>
      <YMapDefaultFeaturesLayer/>
      <YMapMarker
        coordinates={MAP_PLACE_MARKER}
        draggable={false}
      >
        <Link
          target="_blank"
          href={MAP_PLACE_COMPANY}
          className="map-marker custom-map__marker"
        >
          <img src="/images/marker.png" alt="map marker"/>
        </Link>
      </YMapMarker>
      <Link className="custom-map__route" href={MAP_PLACE_ROUTE} target="_blank">Как добраться?</Link>
    </YMap>
  );
};

export default CustomMap;
